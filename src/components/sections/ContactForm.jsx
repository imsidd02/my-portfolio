import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { profile } from "../../data/content";

// Web3Forms access keys are public by design; the env var allows rotating it without a code change.
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? "19b6b7d2-07fd-45e8-9f1d-ec39bbaf24ae";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const inputClass = (hasError) =>
    `w-full px-4 py-3 rounded-lg bg-black/50 border ${hasError ? 'border-red-500' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-gray-500`;

const FieldError = ({ id, error }) =>
    error ? (
        <p id={id} className="text-red-400 text-xs mt-1 flex items-center gap-1">
            <AlertCircle size={12} aria-hidden="true" />{error.message}
        </p>
    ) : null;

const ContactForm = () => {
    const [status, setStatus] = useState("idle");

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data) => {
        setStatus("loading");
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    ...data
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                reset();
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                console.error("Form submission failed:", result);
                setStatus("error");
            }
        } catch (error) {
            console.error("Network error:", error);
            setStatus("error");
        }
    };

    const fieldProps = (name) => ({
        id: name,
        ...register(name),
        "aria-invalid": errors[name] ? "true" : "false",
        "aria-describedby": errors[name] ? `${name}-error` : undefined,
        className: inputClass(errors[name]),
    });

    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden"
        >
            <div role="status" aria-live="polite">
                {status === "success" && (
                    <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 rounded-2xl">
                        <CheckCircle className="text-green-500 w-16 h-16 mb-4" aria-hidden="true" />
                        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                        <p className="text-gray-400">I'll get back to you as soon as possible.</p>
                    </div>
                )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                    <input type="text" autoComplete="name" placeholder="Your Name" {...fieldProps("name")} />
                    <FieldError id="name-error" error={errors.name} />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                    <input type="email" autoComplete="email" placeholder="your@email.com" {...fieldProps("email")} />
                    <FieldError id="email-error" error={errors.email} />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                <input type="text" placeholder="Project Inquiry" {...fieldProps("subject")} />
                <FieldError id="subject-error" error={errors.subject} />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                <textarea rows="5" placeholder="Your message here..." {...fieldProps("message")} className={`${inputClass(errors.message)} resize-none`}></textarea>
                <FieldError id="message-error" error={errors.message} />
            </div>

            {status === "error" && (
                <p role="alert" className="text-red-400 text-sm flex items-center gap-2">
                    <AlertCircle size={16} aria-hidden="true" />
                    <span>
                        Sorry, your message couldn't be sent. Please try again or email me at{" "}
                        <a href={`mailto:${profile.email}`} className="underline hover:text-white">{profile.email}</a>.
                    </span>
                </p>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-lg bg-primary-strong hover:bg-primary-strong/90 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "loading" ? (
                    <><Loader2 className="animate-spin" size={18} aria-hidden="true" /><span className="sr-only">Sending…</span></>
                ) : (
                    <><Send size={18} aria-hidden="true" /> Send Message</>
                )}
            </button>
        </motion.form>
    );
};

export default ContactForm;

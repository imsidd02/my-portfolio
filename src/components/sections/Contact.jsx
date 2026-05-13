import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
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
                    access_key: "19b6b7d2-07fd-45e8-9f1d-ec39bbaf24ae",
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
                setTimeout(() => setStatus("idle"), 5000);
            }
        } catch (error) {
            console.error("Network error:", error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-dark/50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to send me a message.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto">
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6 bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden"
                    >
                        {status === "success" && (
                            <div className="absolute inset-0 bg-dark/90 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-center p-8 rounded-2xl">
                                <CheckCircle className="text-green-500 w-16 h-16 mb-4" />
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">I'll get back to you as soon as possible.</p>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    {...register("name")}
                                    placeholder="Your Name"
                                    className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-gray-600`}
                                    aria-invalid={errors.name ? "true" : "false"}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                    placeholder="your@email.com"
                                    className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-gray-600`}
                                    aria-invalid={errors.email ? "true" : "false"}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                            <input
                                id="subject"
                                type="text"
                                {...register("subject")}
                                placeholder="Project Inquiry"
                                className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${errors.subject ? 'border-red-500' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-gray-600`}
                                aria-invalid={errors.subject ? "true" : "false"}
                            />
                            {errors.subject && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.subject.message}</p>}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                {...register("message")}
                                placeholder="Your message here..."
                                className={`w-full px-4 py-3 rounded-lg bg-black/50 border ${errors.message ? 'border-red-500' : 'border-white/10'} focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white placeholder:text-gray-600 resize-none`}
                                aria-invalid={errors.message ? "true" : "false"}
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} />{errors.message.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-4 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : <><Send size={18} /> Send Message</>}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;

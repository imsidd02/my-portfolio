import { lazy, Suspense } from "react";
import { motion } from "framer-motion";

// The form pulls in react-hook-form and zod; load it separately from the first paint.
const ContactForm = lazy(() => import("./ContactForm"));

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-dark/50">
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
                    <Suspense fallback={<div className="min-h-[560px] bg-white/5 border border-white/10 rounded-2xl" />}>
                        <ContactForm />
                    </Suspense>
                </div>
            </div>
        </section>
    );
};

export default Contact;

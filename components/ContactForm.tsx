"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
  email: z.string().email("Bitte eine gültige E-Mail-Adresse eingeben"),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
});

type FormData = z.infer<typeof schema>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgvqk";

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="label-brass">Name</label>
        <input
          {...register("name")}
          type="text"
          id="name"
          className={`input-underline ${errors.name ? "border-red-400" : ""}`}
          placeholder="Dein Name"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="label-brass">E-Mail</label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className={`input-underline ${errors.email ? "border-red-400" : ""}`}
          placeholder="deine@email.ch"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="label-brass">Nachricht</label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className={`input-underline resize-none ${errors.message ? "border-red-400" : ""}`}
          placeholder="Deine Nachricht an uns..."
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-primary w-full justify-center disabled:opacity-50 min-h-[44px]"
      >
        {isSubmitting ? "Wird gesendet..." : (
          <>
            Nachricht senden
            <Send size={16} />
          </>
        )}
      </button>

      {/* Status */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-copper"
        >
          <CheckCircle size={18} />
          <span>Vielen Dank! Deine Nachricht wurde gesendet.</span>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-red-500"
        >
          <AlertCircle size={18} />
          <span>Ein Fehler ist aufgetreten. Bitte versuche es erneut.</span>
        </motion.div>
      )}
    </motion.form>
  );
}

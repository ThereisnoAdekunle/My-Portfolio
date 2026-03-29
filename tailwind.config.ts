import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#f8f8f8",
        cyan: {
          neon: "#00f0ff",
          dim: "#00b8c4",
          glow: "rgba(0,240,255,0.15)",
        },
        purple: {
          neon: "#c026d3",
          dim: "#8b21c4",
          glow: "rgba(192,38,211,0.15)",
        },
        lime: {
          neon: "#22c55e",
          dim: "#16a34a",
          glow: "rgba(34,197,94,0.15)",
        },
        gold: {
          neon: "#facc15",
          dim: "#ca8a04",
          glow: "rgba(250,204,21,0.15)",
        },
        glass: {
          white: "rgba(255,255,255,0.04)",
          border: "rgba(255,255,255,0.08)",
          heavy: "rgba(255,255,255,0.07)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 50% 0%, rgba(0,240,255,0.12) 0%, rgba(192,38,211,0.06) 40%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
        "neon-cyan": "linear-gradient(135deg, #00f0ff, #00b8c4)",
        "neon-purple": "linear-gradient(135deg, #c026d3, #8b21c4)",
        "neon-lime": "linear-gradient(135deg, #22c55e, #16a34a)",
        "neon-gold": "linear-gradient(135deg, #facc15, #ca8a04)",
        "hero-mesh":
          "radial-gradient(at 40% 20%, rgba(0,240,255,0.08) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(192,38,211,0.08) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(34,197,94,0.05) 0px, transparent 50%)",
      },
      animation: {
        "neon-pulse": "neonPulse 2s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glitch": "glitch 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "border-run": "borderRun 3s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "shimmer": "shimmer 2.5s linear infinite",
        "bounce-slow": "bounceSlow 2s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "grid-fade": "gridFade 4s ease-in-out infinite",
      },
      keyframes: {
        neonPulse: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.7", filter: "brightness(1.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glitch: {
          "0%, 90%, 100%": { transform: "translate(0)", filter: "none" },
          "92%": {
            transform: "translate(-2px, 1px)",
            filter: "hue-rotate(90deg)",
          },
          "94%": {
            transform: "translate(2px, -1px)",
            filter: "hue-rotate(-90deg)",
          },
          "96%": {
            transform: "translate(-1px, 2px)",
            filter: "brightness(1.5)",
          },
        },
        borderRun: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(0,240,255,0.3)" },
          "50%": {
            boxShadow:
              "0 0 25px rgba(0,240,255,0.6), 0 0 50px rgba(0,240,255,0.2)",
          },
        },
        gridFade: {
          "0%, 100%": { opacity: "0.03" },
          "50%": { opacity: "0.06" },
        },
      },
      boxShadow: {
        "neon-cyan": "0 0 20px rgba(0,240,255,0.4), 0 0 60px rgba(0,240,255,0.1)",
        "neon-purple":
          "0 0 20px rgba(192,38,211,0.4), 0 0 60px rgba(192,38,211,0.1)",
        "neon-lime": "0 0 20px rgba(34,197,94,0.4), 0 0 60px rgba(34,197,94,0.1)",
        "neon-gold":
          "0 0 20px rgba(250,204,21,0.4), 0 0 60px rgba(250,204,21,0.1)",
        "glass": "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)",
        "glass-lg":
          "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
      backdropBlur: {
        glass: "20px",
        heavy: "40px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;

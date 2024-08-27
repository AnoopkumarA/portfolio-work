const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      margin: {
        '97': '40rem', // Adds mt-512 and -mt-512
        '98': '50rem', // Adds mt-512 and -mt-512
         '98': '32rem', // Adds mt-512 and -mt-512
        '127': '73rem',  // done
        '128': '90rem',  // done
        '144': '143rem',  // done
        '160': '40rem',  // done
        '192': '48rem',  // Adds mt-192 and -mt-192
        '223': '42rem',  // Adds mt-224 and -mt-224
        '224': '53rem',  // Adds mt-224 and -mt-224
        '256': '57rem',  // Adds mt-256 and -mt-256
        '259': '67rem',  // Adds mt-256 and -mt-256
        '288': '72rem',  // Adds mt-288 and -mt-288
        '320': '80rem',  // Adds mt-320 and -mt-320
        '352': '88rem',  // Adds mt-352 and -mt-352
        '360': '93rem',  // Adds mt-320 and -mt-320
        '384': '198rem',  // done
        '416': '104rem', // Adds mt-416 and -mt-416
        '448': '110rem', // Adds mt-448 and -mt-448
        '480': '120rem', // Adds mt-480 and -mt-480
        '512': '128rem', // done
        '513': '143rem', // Adds mt-512 and -mt-512
      },
      spacing: {
        '43': '10.6rem',  // Adds ml-128, mr-128, -ml-128, -mr-128
        '98': '17rem', // Adds mt-512 and -mt-512
        '97': '28rem',  // Adds ml-128, mr-128, -ml-128, -mr-128
        '169': '31rem',  // Adds ml-128, mr-128, -ml-128, -mr-128
        '111': '43rem',  // Adds ml-128, mr-128, -ml-128, -mr-128
        '112': '22.8rem',  // Adds ml-128, mr-128, -ml-128, -mr-128
        '113': '32rem',  // done
        '114': '52rem',  // done
        '115': '35rem',  // done
        '117': '37rem',  // done
        '116': '34rem',  // done
        '118': '73rem',  // done
        '119': '43rem', //done
        '120': '62rem',  // done
        '121': '20rem',  // done
        '124': '52rem',  // done
        '125': '49rem',  // done
        '126': '64rem',  // done
        '127': '73rem',  // done
        '128': '64rem',  // done
        '129': '75rem',  // done
        '130': '75rem',  // done
        '131': '79rem',  // done
        '152': '76rem',  // done
        '154': '62rem',  // done
        '156': '64rem',  // done
        '132': '49rem', //done
        '256': '64rem',  // Adds mt-256 and -mt-256
        '259': '67rem',  // Adds mt-256 and -mt-256
        '288': '72rem',  // Adds mt-288 and -mt-288
        '320': '80rem',  // Adds mt-320 and -mt-320
        '352': '88rem',  // Adds mt-352 and -mt-352
        '360': '93rem',  // Adds mt-320 and -mt-320
        '384': '101rem',  // Adds mt-384 and -mt-384
        '416': '79rem', // Adds mt-416 and -mt-416
        '448': '110rem', // Adds mt-448 and -mt-448
        '480': '120rem', // Adds mt-480 and -mt-480
        '512': '128rem', // Adds mt-512 and -mt-512
        '513': '190rem', // Adds mt-512 and -mt-512
      },
      height: {
        '128': '32rem',  // Adds mt-128 and -mt-128
        '144': '36rem',  // Adds mt-144 and -mt-144
        '160': '40rem',  // Adds mt-160 and -mt-160
        '192': '48rem',  // Adds mt-192 and -mt-192
        '220': '50rem',  // Adds mt-224 and -mt-224
        '224': '53rem',  // Adds mt-224 and -mt-224
        '256': '64rem',  // Adds mt-256 and -mt-256
        '288': '72rem',  // Adds mt-288 and -mt-288
        '320': '80rem',  // Adds mt-320 and -mt-320
        '352': '88rem',  // Adds mt-352 and -mt-352
        '360': '93rem',  // Adds mt-320 and -mt-320
        '384': '96rem',  // Adds mt-384 and -mt-384
        '416': '104rem', // Adds mt-416 and -mt-416
        '448': '112rem', // Adds mt-448 and -mt-448
        '480': '120rem', // Adds mt-480 and -mt-480
        '512': '128rem', // Adds mt-512 and -mt-512
      },
    
      colors: {
        primary: '#161A31',
        secondary: '#06091F',
        customBlue: '#000319',
        customWhite: '#CFCFCF',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-button': 'linear-gradient(to right, #161A31, #06091F)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require("tailwindcss-animate"),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export const defaultTheme = {
  border: {
    radiusSmall: "4px",
    radiusMedium: "8px",
    radiusLarge: "16px",
  },
  colors: {
    black: "#000",
    white: "#FFF",
    light: {
      primary: "#2B6CB0",         // Azul principal
      secondary: "#805AD5",       // Roxo secundário
      accent: "#F6E05E",          // Amarelo destaque
  
      background: "#F6F6F3",      // Fundo geral (quase branco)
      sidebarBackground: "#2C5282", // Sidebar azul escuro
      surface: "#FFFFFF",         // Cards, modals
  
      textPrimary: "#757575",     // Texto principal (preto)
      textSecondary: "#718096",   // Texto secundário (cinza)
      

      button: "#F6F6F6",
      border: "#E2E8F0",          // Bordas suaves
      error: "#E53E3E",           // Erro
      warning: "#F6AD55",         // Alerta
      success: "#48BB78",         // Sucesso
    },
    
    dark: {
      primary: "#2B6CB0",         // Azul principal
      secondary: "#9F7AEA",       // Roxo mais claro para contraste no dark
      accent: "#ECC94B",          // Amarelo mais queimado
  
      background: "#1A202C",      // Fundo geral (cinza quase preto)
      sidebarBackground: "#2C5282", // Sidebar azul ainda mais destacado
      surface: "#2D3748",         // Cards/modals no dark mode
  
      textPrimary: "#FFFFFF",     // Texto principal (branco)
      textSecondary: "#A0AEC0",   // Texto secundário (cinza claro)
  
      border: "#4A5568",          // Bordas mais discretas
      error: "#F56565",           // Erro
      warning: "#ED8936",         // Alerta
      success: "#68D391",         // Sucesso
    }
  },
  font: {
    // family: "'Roboto', sans-serif",
    sizes: {
      small: "0.8rem",
      medium: "1rem",
      large: "1.25rem",
      xlarge: "2rem",
    },
    weights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  grid: {
    container: "1200px",
    gutter: "16px",
  },
  layers: {
    base: 10,
    dropdown: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  spacings: {
    xsmall: "4px",
    small: "8px",
    medium: "16px",
    large: "24px",
    xlarge: "32px",
  },
  transition: {
    default: "0.2s ease-in-out",
    fast: "0.15s ease-in-out",
  },
} as const;

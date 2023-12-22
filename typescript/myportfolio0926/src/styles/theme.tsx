export type ThemeType = {
    colors: {
        primary: {
          main: string,
          dark: string,
          light: string
        },
        secondary: {
            main: string,
            dark: string,
            light: string
        }
    }
}

const theme: ThemeType = {
    colors: {
        primary: {
            main: "#E7816B",
            dark: "#1D1C1E",
            light:"#ffffff"
        },
        secondary: {
            main: "#FFAD9B",
            dark: "#333136",
            light:"#F1F3F5"
        }
    }
};
export default theme;
// Define the structure of each menu item (e.g., the data for "tragos", "cervezas", etc.)

// Define the shape of the API response
export interface HojaData {
hoja: string;
data: string[][]; // Array of menu items for each hoja (e.g., "tragos", "cervezas", etc.)
}

export interface ApiResponse {
nombre_archivo: string;
menu: string[]; // List of menu sections ("tragos", "cervezas", etc.)
info: Info;
data: HojaData[]; // Array of hoja data (each hoja has a name and a list of menu items)
}

export interface Info {
    nombre:      string;
    vigencia:    string;
    direccion:   string;
    telefono:    string;
    horario:     string;
    happy:       string;
    direcciones: string[];
    telefonos:   string[];
    redes:       string[];
    page:        Headings[];
}

export interface Headings {
    h1: string;
    h2: string;
    h3: string;
}
  
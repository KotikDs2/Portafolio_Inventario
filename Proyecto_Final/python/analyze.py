import pandas as pd

def main():
    # Leer datos desde un archivo CSV
    file_path = '../data/inventario.csv'
    
    try:
        data = pd.read_csv(file_path)
    except FileNotFoundError:
        print(f"El archivo {file_path} no se encuentra.")
        return
    except pd.errors.EmptyDataError:
        print("El archivo CSV está vacío.")
        return
    except pd.errors.ParserError:
        print("Error al analizar el archivo CSV.")
        return
    
    # Realizar análisis de datos
    print("Descripción de los datos:")
    print(data.describe())

    # Mostrar las primeras filas del DataFrame para una visión general
    print("\nPrimeras filas del DataFrame:")
    print(data.head())

    # Mostrar el tipo de datos de cada columna
    print("\nTipos de datos de cada columna:")
    print(data.dtypes)

if __name__ == "__main__":
    main()
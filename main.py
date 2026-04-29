personas = []

while True:
    nombre = input("Ingrese nombre (o escriba 'fin' para terminar): ")
    
    if nombre == "fin":
        break

    edad = int(input("Ingrese edad: "))
    nota = float(input("Ingrese nota: "))

    personas.append([nombre, edad, nota])

print("\nLista de personas ingresadas:")
for p in personas:
    print(p)

print("\nLista ordenada por nota (mayor a menor):")
ordenadas = sorted(personas, key=lambda x: x[2], reverse=True)

for p in ordenadas:
    print(p)

promedio = sum(p[2] for p in personas) / len(personas)
print("\nPromedio de notas:", promedio)
from models import ElectricCar, CargoDrone

def main():
    tesla = ElectricCar("C-101", "Tesla", "v12.4")
    dji_drone = CargoDrone("D-900", "DJI", 400)
    generic_van = ElectricCar("V-50", "Rivian", "v1.0")

    fleet = [tesla, dji_drone, generic_van]

    print("--- Current Fleet Status ---")
    for unit in fleet:
        print(unit)

    print("\n--- Deploying Fleet (Demonstrating Polymorphism) ---")
    for unit in fleet:
        unit.move(20)

    print("\n--- Specialized Operations ---")
    tesla.toggle_autopilot()
    dji_drone.deliver_package(5.5)
    

if __name__ == "__main__":
    main()
class Vehicle:    
    def __init__(self, unit_id, manufacturer, battery_level=100):
        self.unit_id = unit_id
        self.manufacturer = manufacturer
        self.battery_level = battery_level

    def charge(self):
        self.battery_level = 100
        print(f"Unit {self.unit_id} is now fully charged.")

    def move(self, distance):
        self.battery_level -= (distance * 0.5)
        print(f"Vehicle moved {distance}km. Battery at {self.battery_level}%.")

    def __str__(self):
        return f"[Vehicle] ID: {self.unit_id} | Maker: {self.manufacturer} | Battery: {self.battery_level}%"


class ElectricCar(Vehicle):  
    def __init__(self, unit_id, manufacturer, software_version):
        super().__init__(unit_id, manufacturer)
        self.software_version = software_version

    def toggle_autopilot(self):
        print(f"Car {self.unit_id}: Autopilot (v{self.software_version}) engaged.")

    def move(self, distance):
        self.battery_level -= (distance * 0.2)
        print(f"Electric Car {self.unit_id} drove {distance}km on the highway.")


class CargoDrone(Vehicle):    
    def __init__(self, unit_id, manufacturer, max_altitude):
        super().__init__(unit_id, manufacturer)
        self.max_altitude = max_altitude

    def deliver_package(self, weight):
        print(f"Drone {self.unit_id} is delivering a {weight}kg package at {self.max_altitude}ft.")

    def move(self, distance):
        self.battery_level -= (distance * 1.5)
        print(f"Cargo Drone {self.unit_id} flew {distance}km across the city.")
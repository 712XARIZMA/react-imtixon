import { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import { FaCarAlt } from "react-icons/fa";

function App() {
  const [cars, setCars] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [newCar, setNewCar] = useState({
    id: "",
    name: "",
    model: "",
    year: "",
    price: "",
    img: "",
  });
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/cars").then((res) => setCars(res.data));
  }, []);

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      setCars(cars.filter((car) => car.id !== id));
    } catch (error) {
      console.error("error", error);
    }
  };

  const addCar = async (e) => {
    e.preventDefault();
    try {
      const id = Date.now().toString();
      const carToAdd = { ...newCar, id };
      await axios.post("http://localhost:5000/cars", carToAdd);
      setCars([...cars, carToAdd]);
      setNewCar({ id: "", name: "", model: "", year: "", price: "", img: "" });
      setModalOpen(false);
    } catch (error) {
      console.error("error", error);
    }
  };

  const editCar = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:5000/cars/${selectedCar.id}`,
        selectedCar
      );
      setCars(
        cars.map((car) => (car.id === selectedCar.id ? selectedCar : car))
      );
      setSelectedCar(null);
      setEditModalOpen(false);
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleEditClick = (car) => {
    setSelectedCar(car);
    setEditModalOpen(true);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Cars</h1>
        <div className="cards flex-wrap flex items-center gap-4 justify-center">
          {cars.map((car) => (
            <div
              key={car.id}
              className="card bg-white transition-all duration-300 relative hover:shadow-md hover:scale-[1.009] hover:rounded-md w-[250px] h-[300px] !p-[15px]"
            >
              <div className="forimg bg-[#f2f2f2] rounded w-full h-[150px]">
                <img
                  src={car.img}
                  alt={car.model}
                  className="rounded w-full h-full object-cover"
                />
              </div>
              <div className="!mt-2">
                <h2 className="text-red-600 font-bold capitalize">
                  {car.name} {car.model}
                </h2>
                <h2 className="text-[12px] text-gray-700">
                  price: <i>{car.price} $</i>
                </h2>
                <p className="text-[16px] font-bold text-gray-700">
                  {car.year}
                </p>
              </div>
              <div className="actions flex absolute bottom-[10px] right-[10px] items-center gap-2">
                <Pencil
                  size={24}
                  className="border cursor-pointer w-fit rounded !p-[3px]"
                  onClick={() => handleEditClick(car)}
                />
                <Trash2
                  size={24}
                  className="border cursor-pointer w-fit rounded !p-[3px]"
                  onClick={() => deleteCar(car.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="border flex items-center justify-center gap-2 fixed top-[20px] right-[20px] bg-red-500 text-white !px-[20px] !py-[10px] rounded-md !mt-[20px] w-[200px]"
        onClick={() => setModalOpen(true)}
      >
        Add New Car <FaCarAlt />
      </button>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
          <div className="modal w-[300px] !p-[20px] h-fit bg-white rounded shadow-lg transition-all duration-300">
            <h1 className="text-center text-[20px] font-semibold">
              Add New Car
            </h1>
            <form
              onSubmit={addCar}
              className="flex flex-col gap-4 !mt-[25px] justify-center items-center h-full"
            >
              <input
                type="text"
                placeholder="Enter Car Name"
                className="border border-gray-300 rounded text-[14px] !p-[7px] w-full"
                value={newCar.name}
                onChange={(e) => setNewCar({ ...newCar, name: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Enter Car Price"
                className="border border-gray-300 rounded text-[14px] !p-[7px] w-full"
                value={newCar.price}
                onChange={(e) =>
                  setNewCar({ ...newCar, price: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Enter Car Model"
                className="border border-gray-300 rounded text-[14px] !p-[7px] w-full"
                value={newCar.model}
                onChange={(e) =>
                  setNewCar({ ...newCar, model: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Enter Car Year"
                className="border border-gray-300 rounded text-[14px] !p-[7px] w-full"
                value={newCar.year}
                onChange={(e) => setNewCar({ ...newCar, year: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="Enter Car Image URL"
                className="border border-gray-300 rounded text-[14px] !p-[7px] w-full"
                value={newCar.img}
                onChange={(e) => setNewCar({ ...newCar, img: e.target.value })}
                required
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="border bg-green-600 text-white !px-[20px] !py-[10px] rounded-md"
                >
                  Add Car
                </button>
                <button
                  type="button"
                  className="border bg-gray-400 text-white !px-[20px] !py-[10px] rounded-md"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {editModalOpen && selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
          <div className="modal w-[300px] !p-[20px] h-fit bg-white rounded shadow-lg transition-all duration-300">
            <h1 className="text-center text-[20px] font-semibold">Edit Car</h1>
            <form
              onSubmit={editCar}
              className="flex flex-col gap-4 !mt-[25px] justify-center items-center h-full"
            >
              <input
                type="text"
                className="border border-gray-300 rounded text-[14px] !p-[7px] w-full"
                value={selectedCar.name}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, name: e.target.value })
                }
              />
              <input
                type="text"
                className="border border-gray-300 rounded text-[14px] !p-[7px] w-full"
                value={selectedCar.price}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, price: e.target.value })
                }
              />
              <input
                type="text"
                className="border border-gray-300 rounded text-[14px] !p-[7px] w-full"
                value={selectedCar.model}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, model: e.target.value })
                }
              />
              <input
                type="text"
                className="border border-gray-300 rounded text-[14px] !p-[7px] w-full"
                value={selectedCar.year}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, year: e.target.value })
                }
              />
              <input
                type="text"
                className="border border-gray-300 rounded text-[14px] !p-[7px] w-full"
                value={selectedCar.img}
                onChange={(e) =>
                  setSelectedCar({ ...selectedCar, img: e.target.value })
                }
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="border bg-green-600 text-white !px-[20px] !py-[10px] rounded-md"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="border bg-gray-400 text-white !px-[20px] !py-[10px] rounded-md"
                  onClick={() => setEditModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

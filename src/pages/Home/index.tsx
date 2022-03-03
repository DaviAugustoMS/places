import { useState, useEffect } from "react";
import { Header, Form, List } from "../../components";
import { ModalComponent } from "../../components/common";
import DEFAULT_API_URLS from "../../utils/enum";
import axios from "axios";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [formCountry, setFormCountry] = useState({
    country: "Selecione...",
    local: "",
    meta: "",
  });

  const [list, setList] = useState<Array<any>>([]);
  const [isReloading, setIsReloading] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [isModalItem, setIsModalItem] = useState({});

  const handleCountries = async () => {
    try {
      const { data } = await axios.get(DEFAULT_API_URLS.COUNTRIES);
      setCountries(data);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const handleSubmit = async () => {
    const arr: any = [];
    countries.filter((item: any) => {
      if (item.alpha2Code === formCountry.country) {
        arr.push({
          country: item.alpha2Code,
          local: formCountry.local,
          meta: formCountry.meta,
          flag: item.flag,
          name: item.name,
        });
      }
    });

    try {
      await axios.post(`${DEFAULT_API_URLS.PLACES}places`, ...arr);

      setIsReloading(true);
      setFormCountry({
        country: "Selecione...",
        local: "",
        meta: "",
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  const handleEdit = async (item: any) => {
    if (item.local !== "" && item.meta !== "") {
      try {
        await axios.put(`${DEFAULT_API_URLS.PLACES}places/${item._id}`, item);

        setIsModal(false);
        setIsReloading(true);
      } catch (error: any) {
        throw new Error(error);
      }
    }
  };

  const handleModal = (item: any) => {
    setIsModalItem(item);
    setIsModal(true);
  };

  const handleDelete = async (item: any) => {
    console.log("error", item);

    try {
      await axios.delete(`${DEFAULT_API_URLS.PLACES}places/${item}`);

      setIsReloading(true);
    } catch (error: any) {
      console.log(error);

      throw new Error(error);
    }
  };

  const handleChange = async () => {
    try {
      await axios.get(`${DEFAULT_API_URLS.PLACES}`).then((res) => {
        setList(res.data);
      });
    } catch (error: any) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    handleCountries();
    handleChange();
  }, []);

  useEffect(() => {
    handleChange();
    setIsReloading(false);
  }, [isReloading]);

  return (
    <div>
      <Header />
      <Form
        countries={countries}
        state={{ value: formCountry, action: setFormCountry }}
        handleSubmit={handleSubmit}
      />

      <List list={list} handleDelete={handleDelete} handleModal={handleModal} />

      {isModal && (
        <ModalComponent
          item={isModalItem}
          handleEdit={handleEdit}
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
};

export default Home;

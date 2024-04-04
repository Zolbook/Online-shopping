import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import MapPicker from './MapPicker';

export const elements = [

 <p></p>,
      <Provinces />,   
      <p>dededwswweedede</p>,
]
const handleLocationChange = (location) => {
  console.log("New Location:", location);
};
function Provinces() {
    const [selectedCity, setSelectedCity] = useState(()=>{
        const saved= localStorage.getItem('city');
        if (saved) {
            return JSON.parse(saved)
        } else {
            return ''
        }
    });
    useEffect(()=> {
        localStorage.setItem('city', JSON.stringify(selectedCity));
    }, [selectedCity]);
    
    const [district, setDistrict] = useState([]);
    
    const [selectedDistrict, setSelectedDistrict] = useState('');
 
    const [khoroo, setKhoroo] = useState([]);
    const [selectedKhoroo, setSelectedKhoroo] = useState('');
    const [addresses, setAddress] = useState('');
    const [submittedAddress, setSubmittedAddress] = useState(()=>{
        const saved= localStorage.getItem('inputAddress');
        if (saved) {
            return JSON.parse(saved)
        } else {
            return ''
        }
    });
    useEffect(()=> {
        localStorage.setItem('inputAddress', JSON.stringify(submittedAddress));
    }, [submittedAddress]);
    
    
    
    const handleChangeKhoroo =(e)=>{
        setSelectedKhoroo(e.target.value)
    }
const handleSubmit =(event)=>{
event.preventDefault();
setSubmittedAddress(addresses);
}

    const address = (e)=> {
     setAddress(e.target.value)
    }
    const handleChangeCity = (event)=> {
        const selectedCityName = event.target.value;
        setSelectedCity(selectedCityName);
        if (selectedCityName === 'Улаанбаатар хот') {
            setDistrict(['Багануур', 'Багахангай', 'Баянгол ', 'Баянзүрх', 'Налайх', 'Сонгинохайрхан', 'Сүхбаатар', 'Хан-уул', 'Чингэлтэй']);
        } else if (selectedCityName === 'Архангай') {
            setDistrict(['Батцэнгэл', 'Булган', 'Жаргалант', 'Ихтамир', 'Тариат', 'Төвшрүүлэх', 'Хайрхан', 'Хангай', 'Хашаат', 'Хотонт', 'Цахир', 'Цэнхэр', 'Цэцэрлэг', 'Чулуут', 'Эрдэнэбулган', 'Эрдэнэмандал', 'Өгийнуур', 'Өлзийт'])
        } else if (selectedCityName === 'Баян-өлгий') {
            setDistrict(['Алтай', 'Алтанцөгц', 'Баяннуур', 'Бугат', 'Булган', 'Буянт', 'Дэлүүн', 'Ногооннуур', 'Сагсай', 'Толбо', 'Улаанхус', 'Цэнгэл', 'Өлгий'])
        }
        else if (selectedCityName === 'Баянхонгор аймаг') {
            setDistrict(['Баацагаан', 'Баян-овоо', 'Баян-өндөр', 'Баянбулаг', 'Баянговь', 'Баянлиг', 'Баянхонгор', 'Баянцагаан', 'Богд', 'Бууцагаан', 'Бөмбөгөр', 'Галуут', 'Гурванбулаг', 'Жаргалант'])
        }
        else if (selectedCityName === 'Булган аймаг') {
            setDistrict(['Баяннуур', 'Бугат', 'Гурванбулаг', 'Могод', 'Хангал'])
        }
        else if (selectedCityName === 'Говь-Алтай аймаг') {
            setDistrict(['Жаргалан', 'Тайшир', 'Алтай', 'Цогт', 'Төгрөг'])
        }
        else if (selectedCityName === 'Дархан аймаг') {
            setDistrict(['Дархан', 'Орхон', 'Хонгор', 'Шарын гол'])
        }
        else if (selectedCityName === 'Дорнод аймаг') {
            setDistrict(['Баян-уул', 'Баяндун', 'Матад', 'Сэргэлэн', 'Халх'])
        }
        else if (selectedCityName === 'Дорноговь аймаг') {
            setDistrict(['Сайншанд', 'Өргөн', 'Замын-үүд', 'Хөвсгөл', 'Дэлгэрэх'])
        }
        else if (selectedCityName === 'Дундговь аймаг') {
            setDistrict(['Луус', 'Гурван сайхан', 'Дэлгэрхангай', 'Дэлгэрцогт', 'Сайхан-овоо'])
        }
        else if (selectedCityName === 'Завхан аймаг') {
            setDistrict(['Баянтэс', 'Баянхайрхан', 'Дөрвөлжин', 'Отгон', 'Идэр'])
        }
        else if (selectedCityName === 'Орхон аймаг') {
            setDistrict(['Баянөндөр', 'Жаргалант'])
        }
        else if (selectedCityName === 'Сэлэнгэ аймаг') {
            setDistrict(['Алтанбулаг', 'Сайхан', 'Сант'])
        }
        else if (selectedCityName === 'Сүхбаатар аймаг') {
            setDistrict(['Баруун урт', 'Бяандэлгэр', 'Наран'])
        }
        else if (selectedCityName === 'Төв аймаг') {
            setDistrict(['Батсүмбэр', 'Алтанбулаг', 'Аргалант'])
        }
        else if (selectedCityName === 'Увс аймаг' ) {
            setDistrict(['Ховд', 'Зүүнговь', 'Зүүнхангай', 'Малчин'])
        }
        else if (selectedCityName === 'Ховд аймаг') {
            setDistrict(['Ховд', 'Буянт', 'Булган'])
        }
        else if (selectedCityName === 'Хэнтий аймаг') {
            setDistrict(['Мөрөн', 'Дархан', 'Биндэр'])
        }
        else if (selectedCityName === 'Хөвсгөл аймаг') {
            setDistrict(['Жаргалант', 'Тосонцэнгэл', 'Мөрөн', 'Галт'])
        }
        else if (selectedCityName === 'Өвөрхангай аймаг') {
            setDistrict(['Арвайхээр', 'Баянгол', 'Богд'])
        }
        else if (selectedCityName === 'Өмнөговь аймаг') {
            setDistrict(['Даланзадгад', 'Цогтцэций', 'Номгон', 'Ханбогд'])
        }
    }

    const handleChangeDistrict =(e)=> {
      const selectedDistrictName = e.target.value;
      setSelectedDistrict(selectedDistrictName);
      if (selectedDistrictName==='Багануур'){
        setKhoroo(['Бага гүн', 'Их гүн', 'Наран хороолол', 'Хилчин', 'Хэрлэн' ])
      } else if (selectedDistrictName==='Багахангай'){
        setKhoroo(['Алтгана', 'Нуур', 'Замчин', 'Цайдам', 'Өндөртолгой' ])
      }else if (selectedDistrictName==='Баянзүрх'){
        setKhoroo(['12-р хороолол', '14-p хороолол', '16-р хороолол', '1-p хороо', '3-p хороо' ])
      }
      else if (selectedDistrictName==='Налайх'){
        setKhoroo(['Тэрэлж', 'Алтай', 'Бадрал', 'Жаргалант', 'Залуучууд' ])
      }
      else if (selectedDistrictName==='Сонгинохайрхан'){
        setKhoroo(['Сонсголон', 'Их наран', '21 хороолол', 'Ханын материал', '1 хороолол' ])
      }
      else if (selectedDistrictName==='Сүхбаатар'){
        setKhoroo(['Бага гүн', 'Их гүн', 'Наран хороолол', 'Хилчин', 'Хэрлэн' ])
      }
      else if (selectedDistrictName==='Хан уул'){
        setKhoroo(['1-p хороо', '3-p хороо', '4-p хороо', '5-p хороо' ])
      }
      else if (selectedDistrictName==='Чингэлтэй'){
        setKhoroo(['1-p хороо', '3-p хороо', '4-p хороо', '5-p хороо' ])
      }
      else if (selectedDistrictName==='Баянгол'){
        setKhoroo(['1-p хороо', '3-p хороо', '4-p хороо', '5-p хороо'])
      }
      else if (selectedDistrictName==='Батцэнгэл'){
        setKhoroo(['1-p баг', '3-p баг', '4-p баг', '5-p баг'])
      }
      else if (selectedDistrictName==='Алтай'){
        setKhoroo(['Хар бут баг', 'Хар нуур баг', 'Бардам баг', 'Улаан хаг баг'])
      }
      else if (selectedDistrictName==='Батцэнгэл'){
        setKhoroo(['1-p баг', '3-p баг', '4-p баг', '5-p баг'])
      }
      else if (selectedDistrictName==='Даланзадгад'){
        setKhoroo(['баруун сайхан баг', 'зүүн сайхан баг', 'хан уул баг', 'далан баг'])
      }
      else if (selectedDistrictName==='Цогтцэций'){
        setKhoroo(['Билгэх баг', 'Сийрст баг', 'Таван толгой баг', 'Цагаан овоо баг'])
      }
      else if (selectedDistrictName==='Ханбогд'){
        setKhoroo(['Баян баг', 'Гавилууд баг', 'Жавхлант баг', 'Номгон баг' , 'Оюуттолгой баг'])
      }
      else if (selectedDistrictName==='Дархан'){
        setKhoroo(['1-p баг', '3-p баг', '4-p баг', '5-p баг', '6-p баг', '7-p баг'])
      }

    }


    return (
        <>
        <div>
         <div className='row d-flex-col' style={{marginTop:'100px'}}>
            <div className='col-2'>Хот аймаг</div>
            <div className='col-2'>Дүүрэг сум</div>
         
         </div>
        </div>
        <form style={{marginLeft:'50px'}} className='col d-flex-col'>
        <select value={selectedCity} onChange={handleChangeCity}>
        <option>Аймаг хот сонгох</option>
        <option value='Улаанбаатар хот'>Улаанбаатар хот</option>
        <option value='Архангай аймаг'>Архангай аймаг </option>
        <option value='Баян-өлгий аймаг'>Баян-өлгий аймаг</option>
        <option value='Баянхонгор аймаг'>Баянхонгор аймаг</option>
        <option value='Булган аймаг'>Булган аймаг</option>
        <option value='Говь-Алтай аймаг'>Говь-Алтай аймаг</option>
        <option value='Говьсүмбэр аймаг'>Говьсүмбэр аймаг</option>
        <option value='Дархан аймаг'>Дархан аймаг</option>
        <option value='Дорноговь аймаг'>Дорноговь аймаг</option>
        <option value='Дорнод аймаг'>Дорнод аймаг</option>
        <option value='Дундговь аймаг'>Дундговь аймаг</option>
        <option value='Завхан аймаг'>Завхан аймаг</option>
        <option value='Орхон аймаг'>Орхон аймаг</option>
        <option value='Сэлэнгэ аймаг'>Сэлэнгэ аймаг</option>
        <option value='Сүхбаатар аймаг'>Сүхбаатар аймаг</option>
        <option value='Төв аймаг'>Төв аймаг</option>
        <option value='Увс аймаг'>Увс аймаг</option>
        <option value='Ховд аймаг'>Ховд аймаг</option>
        <option value='Хэнтий аймаг'>Хэнтий аймаг</option>
        <option value='Хөвсгөл аймаг'>Хөвсгөл аймаг</option>
        <option value='Өвөрхангай аймаг'>Өвөрхангай аймаг</option>
        <option value='Өмнөговь аймаг'>Өмнөговь аймаг</option>
    </select>
    <select value={selectedDistrict} onChange={handleChangeDistrict}>
     <option>Сум дүүрэг сонгох</option>
     {district.map((d)=> (
        <option key={d} value={d}>{d}</option>
     ))}
    </select>

    {selectedDistrict&&
    <select value={selectedKhoroo} onChange={handleChangeKhoroo}>
      <option >Баг хороо сонгох</option>
      {khoroo.map((khor)=>(
        <option value={khor} key={khor}>{khor}</option>
      ))}
    </select>
    }
  
    </form>
    <div className='card' style={{marginTop:'60px'}}>
    <p>Дэлгэрэнгүй хаяг</p>
    <form onSubmit={handleSubmit}>
    <MapPicker onLocationChange={handleLocationChange} />
    <MDBInput type='text' value={addresses} onChange={address}/>
    <MDBBtn type='submit' >Хадгалах</MDBBtn>
    </form>
    <p>{submittedAddress}</p>
    </div>
    </>
    );


  
}
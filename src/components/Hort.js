import React from "react";
import styles from "./StylesForSingle.module.css";
import hort from "./img/mainHort.jpg";
import { Link } from "react-router-dom";

export default function Hort() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.block}>
          <img className={styles.img} src={hort} alt="" />
          <p>
            За даними археологічних досліджень, цей острів населений вже з епохи
            палеоліту. Зокрема, тут можна знайти і пам'ятники ранніх слов'ян:
            залишки поселень, могильники племен черняхівської культури та антів.
            Острів відвідував давньогрецький історик Геродот. На острові Геродот
            записав легенду про родоначальника скіфів, сина Геркулеса і Табіті,
            зміїної богині. У 1223 році Хортиця була місцем збору руських князів
            перед битвою з татаро-монголами на річці Калці. Але найславетнішими
            часами для цих територій, мабуть, все ж так, були часи існування
            славетного лицарства – запорозького козацтва. Тут на невеличкому
            острові Мала Хортиця (біля острова Хортиця) у 1552-58 роках князь
            Дмитро Вишневецький побудував “укріплений городок” – фортецю. Вона
            стала праобразом всіх майбутніх січей.Після Вишневецького, за
            різними джерелами на Хортиці побували такі козацькі ватажки як Яків
            Шах, Петро Конашевич-Сагайдачний, Марк Жмайло, Іван Сулима. Біля
            острова Хортиця, в січні 1648 року, починалося повстання козаків під
            проводом Богдана Хмельницького.
          </p>
          <Link to='/'><button className={styles.btn}>Назад</button></Link>
        </div>
      </div>
    </>
  );
}
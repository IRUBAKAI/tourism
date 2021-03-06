import React from "react";
import styles from "./StylesForSingle.module.css";
import oleshko from "./img/mainOleshko.jpg";
import { Link } from "react-router-dom";

export default function Oleshko() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.block}>
          <img className={styles.img} src={oleshko} alt="" />
          <p>
            Незважаючи на те, що Олешківські піски часто називають пустелею, це
            не зовсім правильно. За температурним режимом та кількістю опадів їх
            можна швидше віднести до напівпустель. Влітку пісок нагрівається до
            70 градусів, і гарячі висхідні потоки, що йдуть від пісків,
            розгонять дощові хмари. Тому дощів тут менше, аніж в самому Херсоні,
            який знаходиться по іншу сторону Дніпра. Трапляються тут і піщані
            бурі, під час яких не видно ані неба, ані сонця. В пустелі на
            глибині 300-400 м існує прісне підземне озеро з дуже смачною водою.
            Проте, науковці дослідили, що масштабно добувати звідси воду не
            можна, оскільки рівень води знизиться, і ліси не зможуть стримувати
            піски. До найближчого населеного пункту від пустелі – біля 7 км.
            Раніше в Олешківських пісках знаходився військовий полігон, на якому
            відпрацьовували бомбування льотчики з країн Варшавського договору. У
            зв’язку з цим було обмежено наукове дослідження регіону. До сьогодні
            у пісках ще можна натрапити на снаряди, що не розірвалися.
          </p>
          <Link to="/tourism">
            <button className={styles.btn}>Назад</button>
          </Link>
        </div>
      </div>
    </>
  );
}

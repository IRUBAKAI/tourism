import React from "react";
import styles from "./Main.module.css";
import hort from "./img/hort.jpg";
import oleshko from "./img/oleshko.jpg";
import goverla from "./img/goverla.JPG";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className={styles.main_block}>
        <nav>
          <h1 className={styles.title}>Туристична Україна</h1>
        </nav>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <img className={styles.img} src={hort} alt="" />
            <p>
              Хортиця - найбільший острів на Дніпрі та найбільший річковий
              острів у Європі. Розташований у районі міста Запоріжжя нижче
              Дніпрогесу, унікальний природний та історичний комплекс.
              Протягнутий з північного заходу на південний схід, довжина 12,5 км
              та ширина 2,5 км.
            </p>
            <Link to="/hort">
              <button className={styles.btn}>Далі >></button>
            </Link>
          </div>
          <div className={styles.block}>
            <img className={styles.img} src={oleshko} alt="" />
            <p>
              Олешківські піски є найбільшим піщаним масивом у Європі.
              Складаються із безмежних барханів (тутешні мешканці називають їх
              «кучугурами»), висотою близько 5 м, і негустою рослинністю…
              Знаходяться ці піски у Цюрупінському районі (стара назва
              Цюрупінська – Олешки) Херсонської області,за 30 км на схід від
              обласного центру.
            </p>
            <Link to="/oleshko">
              <button className={styles.btn}>Далі >></button>
            </Link>
          </div>
          <div className={styles.block}>
            <img className={styles.img} src={goverla} alt="" />
            <p>
              Популярний об'єкт літнього та зимового туризму. Перший туристичний
              маршрут зі сходження на вершину був відкритий 1880 року. Взимку
              альпіністським сходженням на Говерлу присвоєна категорія 1Б. У
              кінці березня щорічно, починаючи з 1964 року, відбувається
              «Говерляна» — традиційний масовий похід-сходження на г. Говерлу,
              який присвячується відкриттю спортивного літнього сезону на
              Львівщині й пам'яті загиблих товаришів-альпіністів і туристів.
            </p>
            <Link to="/goverla">
              <button className={styles.btn}>Далі >></button>
            </Link>
          </div>
        </div>
        <a className={styles.tourism_a} href="https://distour.blogspot.com/">Дослідження в туризмі</a>
      </div>
    </>
  );
};

export default Main;

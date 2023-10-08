import imgdesert from "./src/imgs/img1-desert.png"
import imgluna from "./src/imgs/img-luna.png"
import imgmountain from "./src/imgs/img1-mountainDesert.png"
import redplan from "./src/imgs/img-redPlanet.png"

import React from "react";

function Consider() {
  return (
    <>


        <section id="consider" class="overflow-hidden bg-black-50 sm:grid sm:grid-cols-2 sm:items-center">
            <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                <div
                class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                >
                <h2 class="text-2xl font-bold text-gray-100 md:text-3xl">
                    Zona Habitable y Agua Líquida
                </h2>

                <p class="hidden text-gray-300 md:mt-4 md:block">
                Los exoplanetas en la "zona habitable" de sus estrellas, donde podría existir agua líquida, son de gran interés, ya que el agua es esencial para la vida.
                </p>
                </div>
            </div>

        <img alt="exo1"
            src={imgdesert}
            class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" />
        </section>

        <section class="overflow-hidden bg-black-50 sm:grid sm:grid-cols-2 sm:items-center">
            <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                <div
                class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                >
                <h2 class="text-2xl font-bold text-gray-100 md:text-3xl">
                Similaridad a la Tierra
                </h2>

                <p class="hidden text-gray-300 md:mt-4 md:block">
                Los planetas rocosos que se asemejan a la Tierra en tamaño y órbita son emocionantes, ya que podrían ofrecer condiciones habitables similares.
                </p>
                </div>
            </div>

        <img alt="exo2"
            src={imgluna}
            class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" />
        </section>

        <section class="overflow-hidden bg-black-50 sm:grid sm:grid-cols-2 sm:items-center">
            <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                <div
                class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                >
                <h2 class="text-2xl font-bold text-gray-100 md:text-3xl">
                Atmósferas Potencialmente Habitables
                </h2>

                <p class="hidden text-gray-300 md:mt-4 md:block">
                La detección de atmósferas con gases como oxígeno y dióxido de carbono sugiere la posibilidad de procesos biológicos en funcionamiento.
                </p>
                </div>
            </div>

        <img alt="exo3"
            src={imgmountain}
            class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" />
        </section>

        <section class="overflow-hidden bg-black-50 sm:grid sm:grid-cols-2 sm:items-center">
            <div class="p-8 md:p-12 lg:px-16 lg:py-24">
                <div
                class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                >
                <h2 class="text-2xl font-bold text-gray-100 md:text-3xl">
                Exoplanetas Inusuales
                </h2>

                <p class="hidden text-gray-300 md:mt-4 md:block">
                Los planetas con características extraordinarias, como órbitas extrañas o condiciones extremas, también generan un gran interés y ayudan a comprender la diversidad planetaria.
                </p>
                </div>
            </div>

        <img alt="exo4"
            src={redplan}
            class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]" />
        </section>
    </>
  );
}

export default Consider;
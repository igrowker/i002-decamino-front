import React from "react";

import { Link } from "react-router-dom";
import { Estrellas } from "./UI/Estrellas"

export const RestaurantDetail = () => {
  return (
    <>
      <div>
        <div className="flex max-w-sm w-full bg-white shadow-md  mx-auto">
          <div></div>

          <div
            className="w-full rounded-xl relative shadow-lg hover:shadow-2xl movie-item text-black movie-card"
            data-movie-id="438631"
          >
            <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-white via-gray-900 to-transparent"></div>
            <div
              className="relative cursor-pointer group z-10 px-10space-y-6 movie_info"
              data-lity=""
            >
              <div className="poster__info align-self-end w-full">
                <div className="h-40"></div>
                <h3 className="text-2xl font-semibold  text-white text-center pb-12">
                  Restaurante
                </h3>
                <div className="space-y-6  bg-white rounded-t-xl p-5">
                  <div className="flex flex-col space-y-2 inner">
                    <div className="mb-0 text-lg text-gray-900 font-semibold ">
                      About Restaurante
                    </div>
                  </div>
                  <div className="flex flex-row justify-between datos">
                    <div className="flex flex-col datos_col">
                      <div className="popularity"></div>
                      <div className="text-sm text-gray-400">
                       <Estrellas/>
                      </div>
                    </div>
                    <div className="flex flex-col datos_col">
                      <div className="release"></div>
                    </div>
                    <div className="flex flex-col datos_col">
                      <div className="release"></div>
                      <div className="text-sm text-gray-400">Ver reviews</div>
                    </div>
                  </div>
                  <div className="flex flex-col overview">
                    <div className="flex flex-col"></div>
                    <div className="text-lg text-gray-900 font-semibold mt-2.5 mb-5">
                      Menu
                    </div>

                    <div className="text-lg text-gray-900 font-semibold mt-2.5 flex items-center justify-between ">
                      Asado libre con bebida
                    </div>
                    <p className="text-xs text-black mb-5">
                      Desde $10 por persona
                    </p>
                    <div className="text-lg text-gray-900 font-semibold mt-2.5 flex items-center justify-between ">
                      Empanadas
                    </div>
                    <p className="text-xs text-black mb-5">
                      Desde $10 la docena
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="absolute inset-0 transform w-full -translate-y-4"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.geagp26pb91JxbnJ7ydeIQHaKu%26pid%3DApi&f=1&ipt=46bb4f9251a2789985307de852248fca556df7d6893393d37f8d96d1e702ba88&ipo=images"
            />
            <div className="bg-white flex flex-row relative pb-10 space-x-4 z-10 ">
              <a
                className="flex items-center py-2 px-28 rounded-lg mx-auto h-full text-white bg-greenT hover:bg-freshMint"
                href="#"
                target="_blank"
                data-unsp-sanitized="clean"
              >
                <div className="text-sm text-white ml-2">Añadir a mi ruta</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

import React from "react";

const PokemonCard = ({ pokemon }) => {
  const {
    name,
    base_experience,
    sprites,
    weight,
    height,
    types,
    abilities,
    forms,
  } = pokemon;

  return (
    <div className="results-summary-container" data-testid="pokemon-card">
      <div className="results-summary-container__result">
        <h3 className="heading-tertiary normal-text font-bold text-3xl">
          POKEMON: {name}
        </h3>
        <div className="result-box">
          <img
            src={sprites?.other?.home?.front_default}
            alt={name}
            className="w-[200px]"
          />
        </div>

        <div className="summary__cta my-4">
          <p className="paragraph font-bold">Sprites:</p>
          <div className="flex justify-between">
            {["front_default", "back_default", "front_shiny", "back_shiny"].map(
              (key) => (
                <img className="object-fill max-w-1/2 w-1/5 h-1/5" key={key} src={sprites[key]} alt={key.replace("_", " ")} />
              )
            )}
          </div>
        </div>

        <div className="result-text-box">
          <p className="heading-secondary font-bold">HP: {base_experience}</p>
          <div className="ml-auto font-bold ">
            <p className="paragraph">Basic Info:</p>
            <p className="paragraph">Height: {height}</p>
            <p className="paragraph">Weight: {weight}</p>
          </div>
        </div>

        <div className="flex justify-between mt-5 w-full text-white normal-case">
          <InfoSection title="Abilities" items={abilities} keyExtractor={(item) => item.ability.name} />
          <InfoSection title="Types" items={types} keyExtractor={(item) => item.type.name} />
          <InfoSection title="Forms" items={forms} keyExtractor={(item) => item.name} />
        </div>
      </div>
    </div>
  );
};

const InfoSection = ({ title, items, keyExtractor }) => (
  <div className="text-left">
    <p className="font-bold">{title}</p>
    {items?.map((item) => (
      <p key={keyExtractor(item)} className="normal-case">
        {keyExtractor(item)}
      </p>
    ))}
  </div>
);

export default PokemonCard;

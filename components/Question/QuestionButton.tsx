'use client';
import React from 'react';
import styled from 'styled-components';

const AlertCard = () => {
    return (
        <StyledWrapper>
            <div className="alert-card mt-8 px-4">
                <div className="alert-card__content px-4">
                    <p className="alert-card__title px-4">Bunu biliyor muydun?</p>
                    <p className="alert-card__message">
                        Göz kapağı estetiği sonrasında genç bir göz çevresine sahip olmak, tüm yüzün görünümünü olumlu yönde değiştirebilir.
                    </p>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    padding-left:1rem;
    padding-right:1rem;
  .alert-card {
    width: 100%;
              padding-left:1rem;
    padding-right:1rem;
    border-radius: 20px;
    background: #fff;
    position: relative;
     z-index:-1;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    transition: transform 0.2s,;
    cursor: pointer;
   
  }

  /* Background colors from the original gradient */
  .alert-card::before {
    content: "";
    position: absolute;
    width: 100%;
     z-index:-1;
    height: 100%;
    padding-left:1rem;
    padding-right:1rem;
    filter: blur(20px);
    background-color: #faff99;
    background-image: radial-gradient(at 33% 82%, hsla(254,71%,69%,1) 0px, transparent 50%),
    radial-gradient(at 28% 4%, hsla(289,96%,63%,1) 0px, transparent 50%),
    radial-gradient(at 69% 49%, hsla(309,91%,71%,1) 0px, transparent 50%),
    radial-gradient(at 94% 14%, hsla(232,66%,62%,1) 0px, transparent 50%),
    radial-gradient(at 19% 93%, hsla(51,98%,74%,1) 0px, transparent 50%),
    radial-gradient(at 15% 80%, hsla(194,87%,63%,1) 0px, transparent 50%),
    radial-gradient(at 56% 52%, hsla(109,71%,61%,1) 0px, transparent 50%);
  }

  .alert-card::after {
    content: "";
    position: absolute;
     z-index:-1;
    width: 100%;
    height: 100%;
     padding-left:1rem;
    padding-right:1rem;
  }

  .alert-card:hover {
    transform: translateY(-5px);
  }

  .alert-card__content {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left:1rem;
    padding-right:1rem;
    width: 100%;
  }

  .alert-card__title {
    font-size: 1.2em;
    font-weight: bold;
    margin: 0;
    color: #000;
  }

  .alert-card__message {
    font-size: 0.9em;
    margin: 0;
    line-height: 1.5;
    font-weight:bold;
    color: #000;
  }
`;

export default AlertCard;

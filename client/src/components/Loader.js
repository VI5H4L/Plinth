import React from 'react'
import "./Loader.css"
const Loader = () => {
  return (
    <>
    <div className='loader-body'>
    <div class="spinner-container">
  <div class="spinnerWrap">
    <div class="spinner" id="spinner1"></div>
  </div>
  <div class="spinnerWrap">
    <div class="spinner" id="spinner2"></div>
  </div>
  <div class="spinnerWrap">
    <div class="spinner" id="spinner3"></div>
  </div>
  <div class="spinnerWrap">
    <div class="spinner" id="spinner4"></div>
  </div>
  <div class="spinnerWrap">
    <div class="spinner" id="spinner5"></div>
  </div>
  <div class="spinnerWrap">
    <div class="spinner" id="spinner6"></div>
  </div>
</div>
    <img src="./plinth.jpg" alt='Please-wait' className='loader-plinth-img'></img>


    </div>
    </>
  )
}

export default Loader
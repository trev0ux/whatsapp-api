<template>
    <div class="button">
        <button class="btn-primary">
            <a href="#0" >{{text}}</a>
        </button>
    </div>
</template>
<script>
export default {
  name: 'Button',
  props: {
    text: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/common/globals.scss';


// Mobile first
*,
*::before,
*::after { 
  box-sizing: border-box;
}
.button{
    width: 100%;

      //Button Link
  .btn-primary {
    display: block;
    text-align: center;
    text-decoration: none;
    font-weight: 800;
    font-size: 1em;
    text-transform: uppercase;
    color: $white;
    border-radius: 50px;
    outline: none;
    //Button shape & animation
    border-radius: $border-rounded;
    margin: 10px 0;
    padding: 20px 35px;
    border: none;
    background-size: 200% auto;
    background-image: linear-gradient(90deg, #33D87D 9.12%, #14BC9C 90.33%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);    
    transition: 0.3s ease-in-out;
    position: relative;


    @include media-breakpoint-down(md){
      padding: 15px 25px;
    }

    &:hover {
      background-position: right center;
    } 
    &:focus{
      box-shadow: none !important;
    }

    &:active{
      transform: scale(0.96) !important;      
      box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
      top: 3px;
    }
    
    a{
        color: #fff;
        text-decoration: none;
    }

  }  
}


</style>

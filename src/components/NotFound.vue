<template>
    <div id="NotFound">
        <div class="cardMorada mt-5">
            <p id="pri">404</p>
            <p id="seg">Not Found</p>
        </div>
    </div>
</template>

<script>
export default{
    name:'NotFound',
    data:function(){
        return{

        }
    },
    methods:{

    }
}
</script>

<style scoped>
.cardMorada{
    width: 800px;
    height: 500px;
    margin-left: auto;
    margin-right: auto;
    background-image: linear-gradient(to right, rgb(207, 185, 218) , rgb(144, 97, 175));
}
#pri{
    color: white;
    font-size: 250px;
    font-weight: 600;
}
#seg{
    color: white;
    font-size: 50px;
}
</style>
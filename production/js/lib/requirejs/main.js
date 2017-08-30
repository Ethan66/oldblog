requirejs.config({
    baseUrl:"../js/com",
    paths:{
        jquery:"../js/lib/jquery/jquery-1.11.3",
        app:"../app"
    }
});
requirejs(["jquery","carousel","app/index"]);
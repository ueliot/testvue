var app =new Vue({
            el: '#app',
            data: {  
              message: 'Hello Vue.js!',
              test: 'desde la web',
              other: 'EXPER MODE'
            }
            /* for (const i in data){
            console log (`${i}: ${data[i]}`)
            } */
    
  })

  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Usted cargó esta página el ' + new Date().toLocaleString()
    }
  })

  app.message="Interesante";


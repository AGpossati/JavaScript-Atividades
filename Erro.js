function tratarErroElançar(erro){
    //throw new Erro('...')
    //throw 10
    //throw true
    //throw 'Mensagem'
    throw{
        name: erro.name,
        msg: erro.msg,
        date: new Date
    }
}

function ImprimaNome(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    }catch(e){
        tratarErroElançar(e)
    }finally{
        console.log('This is the End')
    }
}
const obj = {name: 'Augusto'}

ImprimaNome(obj)
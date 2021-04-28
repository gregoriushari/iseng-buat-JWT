module.exports={
    HOST:"localhost",
    USER:"root",
    PASSWORD:"",
    DB:"apijwt",
    dialect:"mysql",
    pool :{
        max:5,
        min:0,
        acquire:3000,
        idle:1000
    }
}

/*
    max: maximum number of connection in pool
    min: minimum number of connection in pool
    idle: maximum time, in milliseconds, 
    that a connection can be idle before being released
    acquire: maximum time, in milliseconds, 
    that pool will try to get connection before throwing error
*/

module.exports=(sequelize,Sequelize)=>{
    const user = sequelize.define("users",{
        id: {
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        username:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        password:{
            type: Sequelize.STRING
        }
    })
    return user
}
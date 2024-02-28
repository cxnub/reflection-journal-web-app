module.exports = function (sequelize, DataTypes) {
  return sequelize.define("User", {
    user_account_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    image_url: {
      type: DataTypes.STRING,
    },
  });
};

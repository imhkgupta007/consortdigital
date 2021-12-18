"use strict";
const conn = require("../../config/conn");
const Joi = require('joi');
const sequelize = conn;

// Get API with pagination with offset & limit
exports.getdata = async (req, res, next) => {
  let { limit, offset } = req.query;
  const schema = Joi.object({
    limit: Joi.number().required(),
    offset: Joi.number().allow(null),
  });

  try {
    await schema.validateAsync(req.query);
    let queryString = `select * from consortdigital LIMIT ${limit} OFFSET ${offset ? offset : 0};`
    sequelize
      .query(queryString, {
        type: sequelize.QueryTypes.SELECT,
      })
      .then(async resp => {
        res.send({
          status: 200,
          data: resp,
          msg: "Data fetched successfully",
        });
      }).catch((err) => {
        next(err);
      });
  } catch (e) {
    next(e);
  }
};

exports.getdatabyID = async (req, res, next) => {
  let { id } = req.query;
  const schema = Joi.object({
    id: Joi.number().required(),
  });

  try {
    await schema.validateAsync(req.query);
    let queryString = `select * from consortdigital where id = :id;`
    sequelize
      .query(queryString, {
        type: sequelize.QueryTypes.SELECT,
        replacements: { id: id }
      })
      .then(async resp => {
        res.send({
          status: 200,
          data: resp,
          msg: "Data fetched successfully",
        });
      }).catch((err) => {
        next(err);
      });
  } catch (e) {
    next(e);
  }
};

exports.createdata = async (req, res, next) => {
  let { employee_name, employee_salary, employee_age, profile_image } = req.body;
  const schema = Joi.object({
    employee_name: Joi.string().required(),
    employee_salary: Joi.number().required(),
    employee_age: Joi.number().required(),
    profile_image: Joi.string().allow('', null),
  });

  try {
    await schema.validateAsync(req.body);
    let queryString = `INSERT INTO consortdigital (employee_name, employee_salary, employee_age, profile_image) VALUES
    (:employee_name, :employee_salary, :employee_age, :profile_image);`
    sequelize
      .query(queryString, {
        replacements: { employee_name: employee_name, employee_salary: Number(employee_salary), employee_age: Number(employee_age), profile_image: profile_image },
        type: sequelize.QueryTypes.INSERT,
      })
      .then(async () => {
        res.send({
          status: 200,
          msg: "Data added successfully",
        });
      }).catch((err) => {
        next(err);
      });
  } catch (e) {
    next(e);
  }
};

exports.updatedata = async (req, res, next) => {
  let { id, employee_name, employee_salary, employee_age, profile_image } = req.body;

  const schema = Joi.object({
    id: Joi.number().required(),
    employee_name: Joi.string().required(),
    employee_salary: Joi.number().required(),
    employee_age: Joi.number().required(),
    profile_image: Joi.string().allow('', null),
  });

  try {
    await schema.validateAsync(req.body);
    let queryString = `UPDATE consortdigital SET employee_name = :employee_name, employee_salary = :employee_salary, employee_age = :employee_age, profile_image = :profile_image WHERE id = :id;`
    sequelize
      .query(queryString, {
        replacements: { employee_name: employee_name, employee_salary: Number(employee_salary), employee_age: Number(employee_age), profile_image: profile_image, id: id },
        type: sequelize.QueryTypes.UPDATE,
      })
      .then(async () => {
        res.send({
          status: 200,
          msg: "Data updated successfully",
        });
      }).catch((err) => {
        next(err);
      });
  } catch (e) {
    next(e);
  }
};

exports.deletedata = async (req, res, next) => {
  let { id } = req.query;
  const schema = Joi.object({
    id: Joi.number().required(),
  });

  try {
    await schema.validateAsync(req.query);
    let queryString = `DELETE FROM consortdigital WHERE id = :id;`
    sequelize
      .query(queryString, {
        replacements: { id: id },
        type: sequelize.QueryTypes.DELETE,
      })
      .then(async () => {
        res.send({
          status: 200,
          msg: "Data deleted successfully",
        });
      }).catch((err) => {
        next(err);
      });
  } catch (e) {
    next(e);
  }
};
const connect = require("../connect");

const getAllCurriculum = async (req, res) => {
  const conn = await connect();
  const [rows] = await conn.query("SELECT * FROM persona");
  console.log(rows);
  res.send(rows);
};

const getOneCurriculum = async (req, res) => {
  const conn = await connect();
  const [rows] = await conn.query("SELECT * FROM persona WHERE id = ?", [
    req.params.id,
  ]);
  console.log(rows[0]);
  res.send(rows[0]);
};

const CreateCurriculum = async (req, res) => {
  try {
    // Obtener la conexión a la base de datos
    const conn = await connect();

    // Definir la consulta de inserción
    const query = `
            INSERT INTO persona (nombre, apellidos, correo_electronico, telefono, direccion, codigo_postal, localidad, titulo, fecha_nacimiento, lugar_nacimiento, genero, nacionalidad, estado_civil, linkedin, perfil, formacion, formacion1, formacion2, formacion3, formacion4, formacion5, institucion, institiucion1, institucion2, institucion3, institucion4, institucion5, localidad_inst, localidad_inst1, localidad_inst2, localidad_inst3, localidad_inst4, localidad_inst5, fech_inic_inst, fech_inic_inst1, fech_inic_inst2, fech_inic_inst3, fech_inic_inst4, fech_inic_inst5, fech_fin_inst, fech_fin_inst1, fech_fin_inst2, fech_fin_inst3, fech_fin_inst4, fech_fin_inst5, desc_inst, desc_inst1, desc_inst2, desc_inst3, desc_inst4, desc_inst5, puesto, puesto1, puesto2, puesto3, puesto4, puesto5, empleador, empleador1, empleador2, empleador3, empleador4, empleador5, localidad_exp, localidad_exp1, localidad_exp2, localidad_exp3, localidad_exp4, localidad_exp5, fech_inic_exp, fech_inic_exp1, fech_inic_exp2, fech_inic_exp3, fech_inic_exp4, fech_inic_exp5, fech_fin_exp, fech_fin_exp1, fech_fin_exp2, fech_fin_exp3, fech_fin_exp4, fech_fin_exp5, desc_exp, desc_exp1, desc_exp2, desc_exp3, desc_exp4, desc_exp5, idioma, idioma1, idioma2, idioma3, idioma4, idioma5, nivel_idioma, nivel_idioma1, nivel_idioma2, nivel_idioma3, nivel_idioma4, nivel_idioma5, pasatiempo, pasatiempo1, pasatiempo2, pasatiempo3, pasatiempo4, pasatiempo5, curso, curso1, curso2, curso3, curso4, curso5, periodo, periodo1, periodo2, periodo3, periodo4, periodo5, desc_curso, desc_curso1, desc_curso2, desc_curso3, desc_curso4, desc_curso5, aptitud, aptitud1, aptitud2, aptitud3, aptitud4, aptitud5, nombre_ref, nombre_ref1, nombre_ref2, nombre_ref3, nombre_ref4, nombre_ref5, organizacion_ref, organizacion_ref1, organizacion_ref2, organizacion_ref3, organizacion_ref4, organizacion_ref5, local_ref, local_ref1, local_ref2, local_ref3, local_ref4, local_ref5, telefono_ref, telefono_ref1, telefono_ref2, telefono_ref3, telefono_ref4, telefono_ref5, correo_ref, correo_ref1, correo_ref2, correo_ref3, correo_ref4, correo_ref5, certificado, certificado1, certificado2, certificado3, certificado4, certificado5, periodo_cert, periodo_cert1, periodo_cert2, periodo_cert3, periodo_cert4, periodo_cert5, desc_cert, desc_cert1, desc_cert2, desc_cert3, desc_cert4, desc_cert5, logros, logros1, logros2, logros3, logros4, logros5) 
            VALUES
            (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)

            `;

    // Ejecutar la consulta con los datos del cuerpo de la solicitud (req.body)
    const [result] = await conn.query(query, [
      req.body.nombre,
      req.body.apellidos,
      req.body.correo_electronico,
      req.body.telefono,
      req.body.direccion,
      req.body.codigo_postal,
      req.body.localidad,
      req.body.titulo,
      req.body.fecha_nacimiento,
      req.body.lugar_nacimiento,
      req.body.genero,
      req.body.nacionalidad,
      req.body.estado_civil,
      req.body.linkedin,
      req.body.perfil,
      req.body.formacion,
      req.body.formacion1,
      req.body.formacion2,
      req.body.formacion3,
      req.body.formacion4,
      req.body.formacion5,
      req.body.institucion,
      req.body.institucion1,
      req.body.institucion2,
      req.body.institucion3,
      req.body.institucion4,
      req.body.institucion5,
      req.body.localidad_inst,
      req.body.localidad_inst1,
      req.body.localidad_inst2,
      req.body.localidad_inst3,
      req.body.localidad_inst4,
      req.body.localidad_inst5,
      req.body.fech_inic_inst,
      req.body.fech_inic_inst1,
      req.body.fech_inic_inst2,
      req.body.fech_inic_inst3,
      req.body.fech_inic_inst4,
      req.body.fech_inic_inst5,
      req.body.fech_fin_inst,
      req.body.fech_fin_inst1,
      req.body.fech_fin_inst2,
      req.body.fech_fin_inst3,
      req.body.fech_fin_inst4,
      req.body.fech_fin_inst5,
      req.body.desc_inst,
      req.body.desc_inst1,
      req.body.desc_inst2,
      req.body.desc_inst3,
      req.body.desc_inst4,
      req.body.desc_inst5,
      req.body.puesto,
      req.body.puesto1,
      req.body.puesto2,
      req.body.puesto3,
      req.body.puesto4,
      req.body.puesto5,
      req.body.empleador,
      req.body.empleador1,
      req.body.empleador2,
      req.body.empleador3,
      req.body.empleador4,
      req.body.empleador5,
      req.body.localidad_exp,
      req.body.localidad_exp1,
      req.body.localidad_exp2,
      req.body.localidad_exp3,
      req.body.localidad_exp4,
      req.body.localidad_exp5,
      req.body.fech_inic_exp,
      req.body.fech_inic_exp1,
      req.body.fech_inic_exp2,
      req.body.fech_inic_exp3,
      req.body.fech_inic_exp4,
      req.body.fech_inic_exp5,
      req.body.fech_fin_exp,
      req.body.fech_fin_exp1,
      req.body.fech_fin_exp2,
      req.body.fech_fin_exp3,
      req.body.fech_fin_exp4,
      req.body.fech_fin_exp5,
      req.body.desc_exp,
      req.body.desc_exp1,
      req.body.desc_exp2,
      req.body.desc_exp3,
      req.body.desc_exp4,
      req.body.desc_exp5,
      req.body.idioma,
      req.body.idioma1,
      req.body.idioma2,
      req.body.idioma3,
      req.body.idioma4,
      req.body.idioma5,
      req.body.nivel_idioma,
      req.body.nivel_idioma1,
      req.body.nivel_idioma2,
      req.body.nivel_idioma3,
      req.body.nivel_idioma4,
      req.body.nivel_idioma5,
      req.body.pasatiempo,
      req.body.pasatiempo1,
      req.body.pasatiempo2,
      req.body.pasatiempo3,
      req.body.pasatiempo4,
      req.body.pasatiempo5,
      req.body.curso,
      req.body.curso1,
      req.body.curso2,
      req.body.curso3,
      req.body.curso4,
      req.body.curso5,
      req.body.periodo,
      req.body.periodo1,
      req.body.periodo2,
      req.body.periodo3,
      req.body.periodo4,
      req.body.periodo5,
      req.body.desc_curso,
      req.body.desc_curso1,
      req.body.desc_curso2,
      req.body.desc_curso3,
      req.body.desc_curso4,
      req.body.desc_curso5,
      req.body.aptitud,
      req.body.aptitud1,
      req.body.aptitud2,
      req.body.aptitud3,
      req.body.aptitud4,
      req.body.aptitud5,
      req.body.nombre_ref,
      req.body.nombre_ref1,
      req.body.nombre_ref2,
      req.body.nombre_ref3,
      req.body.nombre_ref4,
      req.body.nombre_ref5,
      req.body.organizacion_ref,
      req.body.organizacion_ref1,
      req.body.organizacion_ref2,
      req.body.organizacion_ref3,
      req.body.organizacion_ref4,
      req.body.organizacion_ref5,
      req.body.local_ref,
      req.body.local_ref1,
      req.body.local_ref2,
      req.body.local_ref3,
      req.body.local_ref4,
      req.body.local_ref5,
      req.body.telefono_ref,
      req.body.telefono_ref1,
      req.body.telefono_ref2,
      req.body.telefono_ref3,
      req.body.telefono_ref4,
      req.body.telefono_ref5,
      req.body.correo_ref,
      req.body.correo_ref1,
      req.body.correo_ref2,
      req.body.correo_ref3,
      req.body.correo_ref4,
      req.body.correo_ref5,
      req.body.certificado,
      req.body.certificado1,
      req.body.certificado2,
      req.body.certificado3,
      req.body.certificado4,
      req.body.certificado5,
      req.body.periodo_cert,
      req.body.periodo_cert1,
      req.body.periodo_cert2,
      req.body.periodo_cert3,
      req.body.periodo_cert4,
      req.body.periodo_cert5,
      req.body.desc_cert,
      req.body.desc_cert1,
      req.body.desc_cert2,
      req.body.desc_cert3,
      req.body.desc_cert4,
      req.body.desc_cert5,
      req.body.logros,
      req.body.logros1,
      req.body.logros2,
      req.body.logros3,
      req.body.logros4,
      req.body.logros5,
    ]);

    // Enviar la respuesta JSON con el ID insertado y los datos de la solicitud
    res.json({
      id: result.insertId,
      ...req.body,
    });
  } catch (error) {
    console.error("Error al insertar datos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const DeleteCurriculum = async (req, res) => {
  const conn = await connect();
  await conn.query("DELETE FROM persona WHERE id = ?", [req.params.id]);
  res.send("Eliminado");
};

const UpdateCurriculum = async (req, res) => {
  try {
    const conn = await connect();

    const query = `
    UPDATE persona 
SET 
nombre = ?, 
apellidos = ?, 
correo_electronico = ?, 
telefono = ?, 
direccion = ?, 
codigo_postal = ?, 
localidad = ?, 
titulo = ?, 
fecha_nacimiento = ?, 
lugar_nacimiento = ?, 
genero = ?, 
nacionalidad = ?, 
estado_civil = ?, 
linkedin = ?, 
perfil = ?, 
formacion = ?, 
formacion1 = ?, 
formacion2 = ?, 
formacion3 = ?, 
formacion4 = ?, 
formacion5 = ?, 
institucion = ?, 
institiucion1 = ?, 
institucion2 = ?, 
institucion3 = ?, 
institucion4 = ?, 
institucion5 = ?, 
localidad_inst = ?, 
localidad_inst1 = ?, 
localidad_inst2 = ?, 
localidad_inst3 = ?, 
localidad_inst4 = ?, 
localidad_inst5 = ?, 
fech_inic_inst = ?, 
fech_inic_inst1 = ?, 
fech_inic_inst2 = ?, 
fech_inic_inst3 = ?, 
fech_inic_inst4 = ?, 
fech_inic_inst5 = ?, 
fech_fin_inst = ?, 
fech_fin_inst1 = ?, 
fech_fin_inst2 = ?, 
fech_fin_inst3 = ?, 
fech_fin_inst4 = ?, 
fech_fin_inst5 = ?, 
desc_inst = ?, 
desc_inst1 = ?, 
desc_inst2 = ?, 
desc_inst3 = ?, 
desc_inst4 = ?, 
desc_inst5 = ?, 
puesto = ?, 
puesto1 = ?, 
puesto2 = ?, 
puesto3 = ?, 
puesto4 = ?, 
puesto5 = ?, 
empleador = ?, 
empleador1 = ?, 
empleador2 = ?, 
empleador3 = ?, 
empleador4 = ?, 
empleador5 = ?, 
localidad_exp = ?, 
localidad_exp1 = ?, 
localidad_exp2 = ?, 
localidad_exp3 = ?, 
localidad_exp4 = ?, 
localidad_exp5 = ?, 
fech_inic_exp = ?, 
fech_inic_exp1 = ?, 
fech_inic_exp2 = ?, 
fech_inic_exp3 = ?, 
fech_inic_exp4 = ?, 
fech_inic_exp5 = ?, 
fech_fin_exp = ?, 
fech_fin_exp1 = ?, 
fech_fin_exp2 = ?, 
fech_fin_exp3 = ?, 
fech_fin_exp4 = ?, 
fech_fin_exp5 = ?, 
desc_exp = ?, 
desc_exp1 = ?, 
desc_exp2 = ?, 
desc_exp3 = ?, 
desc_exp4 = ?, 
desc_exp5 = ?, 
idioma = ?, 
idioma1 = ?, 
idioma2 = ?, 
idioma3 = ?, 
idioma4 = ?, 
idioma5 = ?, 
nivel_idioma = ?, 
nivel_idioma1 = ?, 
nivel_idioma2 = ?, 
nivel_idioma3 = ?, 
nivel_idioma4 = ?, 
nivel_idioma5 = ?, 
pasatiempo = ?, 
pasatiempo1 = ?, 
pasatiempo2 = ?, 
pasatiempo3 = ?, 
pasatiempo4 = ?, 
pasatiempo5 = ?, 
curso = ?, 
curso1 = ?, 
curso2 = ?, 
curso3 = ?, 
curso4 = ?, 
curso5 = ?, 
periodo = ?, 
periodo1 = ?, 
periodo2 = ?, 
periodo3 = ?, 
periodo4 = ?, 
periodo5 = ?, 
desc_curso = ?, 
desc_curso1 = ?, 
desc_curso2 = ?, 
desc_curso3 = ?, 
desc_curso4 = ?, 
desc_curso5 = ?, 
aptitud = ?, 
aptitud1 = ?, 
aptitud2 = ?, 
aptitud3 = ?, 
aptitud4 = ?, 
aptitud5 = ?, 
nombre_ref = ?, 
nombre_ref1 = ?, 
nombre_ref2 = ?, 
nombre_ref3 = ?, 
nombre_ref4 = ?, 
nombre_ref5 = ?, 
organizacion_ref = ?, 
organizacion_ref1 = ?, 
organizacion_ref2 = ?, 
organizacion_ref3 = ?, 
organizacion_ref4 = ?, 
organizacion_ref5 = ?, 
local_ref = ?, 
local_ref1 = ?, 
local_ref2 = ?, 
local_ref3 = ?, 
local_ref4 = ?, 
local_ref5 = ?, 
telefono_ref = ?, 
telefono_ref1 = ?, 
telefono_ref2 = ?, 
telefono_ref3 = ?, 
telefono_ref4 = ?, 
telefono_ref5 = ?, 
correo_ref = ?, 
correo_ref1 = ?, 
correo_ref2 = ?, 
correo_ref3 = ?, 
correo_ref4 = ?, 
correo_ref5 = ?, 
certificado = ?, 
certificado1 = ?, 
certificado2 = ?, 
certificado3 = ?, 
certificado4 = ?, 
certificado5 = ?, 
periodo_cert = ?, 
periodo_cert1 = ?, 
periodo_cert2 = ?, 
periodo_cert3 = ?, 
periodo_cert4 = ?, 
periodo_cert5 = ?, 
desc_cert = ?, 
desc_cert1 = ?, 
desc_cert2 = ?, 
desc_cert3 = ?, 
desc_cert4 = ?, 
desc_cert5 = ?, 
logros = ?, 
logros1 = ?, 
logros2 = ?, 
logros3 = ?, 
logros4 = ?, 
logros5 = ? 
WHERE 
id = ?;

        `;

    const { id, ...newData } = req.body;

    const [result] = await conn.query(query, [
      newData.nombre,
      newData.apellidos,
      newData.correo_electronico,
      newData.telefono,
      newData.direccion,
      newData.codigo_postal,
      newData.localidad,
      newData.titulo,
      newData.fecha_nacimiento,
      newData.lugar_nacimiento,
      newData.genero,
      newData.nacionalidad,
      newData.estado_civil,
      newData.linkedin,
      newData.perfil,
      newData.formacion,
      newData.formacion1,
      newData.formacion2,
      newData.formacion3,
      newData.formacion4,
      newData.formacion5,
      newData.institucion,
      newData.institucion1,
      newData.institucion2,
      newData.institucion3,
      newData.institucion4,
      newData.institucion5,
      newData.localidad_inst,
      newData.localidad_inst1,
      newData.localidad_inst2,
      newData.localidad_inst3,
      newData.localidad_inst4,
      newData.localidad_inst5,
      newData.fech_inic_inst,
      newData.fech_inic_inst1,
      newData.fech_inic_inst2,
      newData.fech_inic_inst3,
      newData.fech_inic_inst4,
      newData.fech_inic_inst5,
      newData.fech_fin_inst,
      newData.fech_fin_inst1,
      newData.fech_fin_inst2,
      newData.fech_fin_inst3,
      newData.fech_fin_inst4,
      newData.fech_fin_inst5,
      newData.desc_inst,
      newData.desc_inst1,
      newData.desc_inst2,
      newData.desc_inst3,
      newData.desc_inst4,
      newData.desc_inst5,
      newData.puesto,
      newData.puesto1,
      newData.puesto2,
      newData.puesto3,
      newData.puesto4,
      newData.puesto5,
      newData.empleador,
      newData.empleador1,
      newData.empleador2,
      newData.empleador3,
      newData.empleador4,
      newData.empleador5,
      newData.localidad_exp,
      newData.localidad_exp1,
      newData.localidad_exp2,
      newData.localidad_exp3,
      newData.localidad_exp4,
      newData.localidad_exp5,
      newData.fech_inic_exp,
      newData.fech_inic_exp1,
      newData.fech_inic_exp2,
      newData.fech_inic_exp3,
      newData.fech_inic_exp4,
      newData.fech_inic_exp5,
      newData.fech_fin_exp,
      newData.fech_fin_exp1,
      newData.fech_fin_exp2,
      newData.fech_fin_exp3,
      newData.fech_fin_exp4,
      newData.fech_fin_exp5,
      newData.desc_exp,
      newData.desc_exp1,
      newData.desc_exp2,
      newData.desc_exp3,
      newData.desc_exp4,
      newData.desc_exp5,
      newData.idioma,
      newData.idioma1,
      newData.idioma2,
      newData.idioma3,
      newData.idioma4,
      newData.idioma5,
      newData.nivel_idioma,
      newData.nivel_idioma1,
      newData.nivel_idioma2,
      newData.nivel_idioma3,
      newData.nivel_idioma4,
      newData.nivel_idioma5,
      newData.pasatiempo,
      newData.pasatiempo1,
      newData.pasatiempo2,
      newData.pasatiempo3,
      newData.pasatiempo4,
      newData.pasatiempo5,
      newData.curso,
      newData.curso1,
      newData.curso2,
      newData.curso3,
      newData.curso4,
      newData.curso5,
      newData.periodo,
      newData.periodo1,
      newData.periodo2,
      newData.periodo3,
      newData.periodo4,
      newData.periodo5,
      newData.desc_curso,
      newData.desc_curso1,
      newData.desc_curso2,
      newData.desc_curso3,
      newData.desc_curso4,
      newData.desc_curso5,
      newData.aptitud,
      newData.aptitud1,
      newData.aptitud2,
      newData.aptitud3,
      newData.aptitud4,
      newData.aptitud5,
      newData.nombre_ref,
      newData.nombre_ref1,
      newData.nombre_ref2,
      newData.nombre_ref3,
      newData.nombre_ref4,
      newData.nombre_ref5,
      newData.organizacion_ref,
      newData.organizacion_ref1,
      newData.organizacion_ref2,
      newData.organizacion_ref3,
      newData.organizacion_ref4,
      newData.organizacion_ref5,
      newData.local_ref,
      newData.local_ref1,
      newData.local_ref2,
      newData.local_ref3,
      newData.local_ref4,
      newData.local_ref5,
      newData.telefono_ref,
      newData.telefono_ref1,
      newData.telefono_ref2,
      newData.telefono_ref3,
      newData.telefono_ref4,
      newData.telefono_ref5,
      newData.correo_ref,
      newData.correo_ref1,
      newData.correo_ref2,
      newData.correo_ref3,
      newData.correo_ref4,
      newData.correo_ref5,
      newData.certificado,
      newData.certificado1,
      newData.certificado2,
      newData.certificado3,
      newData.certificado4,
      newData.certificado5,
      newData.periodo_cert,
      newData.periodo_cert1,
      newData.periodo_cert2,
      newData.periodo_cert3,
      newData.periodo_cert4,
      newData.periodo_cert5,
      newData.desc_cert,
      newData.desc_cert1,
      newData.desc_cert2,
      newData.desc_cert3,
      newData.desc_cert4,
      newData.desc_cert5,
      newData.logros,
      newData.logros1,
      newData.logros2,
      newData.logros3,
      newData.logros4,
      newData.logros5,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ error: "No se encontró el registro para actualizar" });
    }

    res.json({ message: "Datos actualizados correctamente" });
  } catch (error) {
    console.error("Error al actualizar datos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = {
  getAllCurriculum,
  getOneCurriculum,
  CreateCurriculum,
  DeleteCurriculum,
  UpdateCurriculum,
};

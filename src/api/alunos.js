import "firebase/database";
const databaseService = firebase.database();

var alunosRef = databaseService.ref('alunos');

/**
 * 
 * @typedef {Object} NewAluno
 * @property {string} nome
 * @property {string} prontuario
 * @property {Date} dataNascimento
 * @property {string} nomeResponsavel
 * @property {string} telefone
 * @property {boolean} ativo
 */

/**
 * 
 * @typedef {Object} Aluno
 * @property {string} id
 * @property {string} nome
 * @property {string} prontuario
 * @property {Date} dataNascimento
 * @property {string} nomeResponsavel
 * @property {string} telefone
 * @property {boolean} ativo
 */

/**
 * 
 * @param {NewAluno} aluno
 * @return {Promise<number>} - Id of new entry
 */
export function addAluno(aluno) {
    const newEntryRef = alunosRef.push();
    return newEntryRef.set(aluno)
        .then(() => newEntryRef.key)
}

/**
 * 
 * @param {string} id
 * @return {Promise}
 */
export function removeAluno(id) {
    return alunosRef.child(id).remove();
}

/** 
 * @param {Aluno} aluno
 * @return {Promise}
 */
export function updateAluno(aluno) {
    if (!aluno.id) {
        return Promise.reject({ message: 'Missing id in entry' });
    }

    return alunosRef.child(aluno.id).remove();
}

/**
 * 
 * @param {number} id
 * @return {Promise<Aluno>}
 */
export function getAlunoById(id) {
    return alunosRef.child(id).once('value')
        .then(snapshot => ({
            id,
            ...snapshot.val()
        }))
}

/**
 * 
 * @return {Promise<Aluno[]>}
 */
export function getAllAlunos() {
    return alunosRef.once('value')
        .then(snapshot => {
            const response = snapshot.val();
            return Object.keys(response)
                .reduce((items, key) => items.push({ [key]: response[key] }), [])
        })
}

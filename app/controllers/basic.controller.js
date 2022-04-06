const { bmi, calc } = require('../services/basic.service');

exports.getBmi = (req, res) =>{
    const {name, height, weight} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`이름 : ${name}`)
    console.log(`키 : ${height}`)
    console.log(`몸무게 : ${weight}`)
    const json = bmi({name, height, weight})
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    res.status(200).json(json)
}

exports.getCalc = (req, res) => {
    const {num1, opcode, num2} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`숫자1 : ${num1}`)
    console.log(`연산 기호 : ${opcode}`)
    console.log(`숫자2 : ${num2}`)
    const json = calc({num1, opcode, num2})
    console.log(`계산된 JSON 값 : ${JSON.stringify(json)}`)
    res.status(200).json(json)
}


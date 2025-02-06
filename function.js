import axios from "axios";

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const isPerfect = (num) => {
    let sum = 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        sum += i;
        if (i !== num / i) sum += num / i;
      }
    }
    return sum === num && num !== 1;
  };
  
  const isArmstrong = (num) => {
    let sum = 0;
    let temp = num;
    const digits = num.toString().length;
    while (temp > 0) {
      sum += Math.pow(temp % 10, digits);
      temp = Math.floor(temp / 10);
    }
    return sum === num;
  };
  
  export const getFunFact = async (num) => {
    try {
        const response = await axios.get(
            `http://numbersapi.com/${num}/math?json`
        );
        return response.data.text;
    } catch (error) {
        return "No fun fact available";
    }
};
  
  const classifyNumber = async (num) => {
    const isArm = isArmstrong(num);
    const properties = isArm ? ["armstrong"] : [];
    properties.push(num % 2 === 0 ? "even" : "odd");
  
    const funFact = await getFunFact(num);
  
    return {
      number: num,
      is_prime: isPrime(num),
      is_perfect: isPerfect(num),
      properties,
      digit_sum: num.toString().split("").reduce((a, b) => a + parseInt(b), 0),
      fun_fact: funFact,
    };
  };

  export default classifyNumber
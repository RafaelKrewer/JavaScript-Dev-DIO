class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;   
    }

    calcIMC(){
        return this.peso / (Math.pow(this.altura, 2));
    }

    classIMC(){
        const imc = this.calcIMC();
        
        if (imc < 18.5) {
            return('Seu índice corporal IMC é de: ' + imc.toFixed(0) + '!' +' Você está abaixo do peso!');
        } else if (imc >= 18.5 && imc < 25){
            return('Seu índice corporal IMC é de: ' + imc.toFixed(0) + '!' +' Você está no peso normal!');
        } else if (imc > 25 && imc < 30){
            return('Seu índice corporal IMC é de: ' + imc.toFixed(0) + '!' +' Você está acima do peso!');
        } else if (imc >= 30 && imc < 40){
            return('Seu índice corporal IMC é de: ' + imc.toFixed(0) + '!' +'Você está com obesidade! Vai caminhar!');
        } else if(imc >= 40){
            return('Seu índice corporal IMC é de: ' + imc.toFixed(0) + '!' +' Você está com obesidade grave. Vá ao pronto socorro IMEDIATAMENTE!');
        }
    }
}

Math.pow(this.altura, 2);

const jose = new Pessoa('José', 70, 1.75);
const paulo = new Pessoa('Paulo', 80, 1.85);
console.log(jose.classIMC());
console.log(paulo.classIMC());

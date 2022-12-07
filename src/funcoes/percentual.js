function percentual(value,geral){
    const valueInt = parseInt(value)
    const resultado = String(((valueInt/geral)*100).toFixed(3)) + "%"
    console.log(resultado)
    return String(resultado)
}
        // setTimeout(
        //     function() {
        //         this.setState({timePassed: true});
        //         this.state.contador += 1; 
        //         if (this.state.size.widthDevice*.153 > this.state.contador){
        //             this.state.contador += 1;}
        //         else{this.state.contador -= 1; }
        //         console.log(this.state.contador)
        //     }
        //     .bind(this),
        //     1000
        //   );

export {percentual}
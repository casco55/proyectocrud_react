import React, { Component } from 'react';



// Redux
import {connect} from 'react-redux';
import { mostrarProducto, editarProducto } from '../actions/productosActions';

class EditarProducto extends Component {
     

     state = { 
          nombre: '',
          precio: '',
          error: false
     }
     componentDidMount() {
         const {id} = this.props.match.params;
         this.props.mostrarProducto(id);
      
     
     }
     enterNombre = (e) => {
          if(e.which === 13) {
          this.setState({nombre: e.target.value})
          console.log(this.state.nombre)
          }
          }
     enterPrecio = (e) => {
          if(e.which === 13) {
          this.setState({precio: e.target.value})
          console.log(this.state.precio)
          }
          }
     componentWillReceiveProps(nextProps, nextState){

        console.log(nextProps.producto);
        const {nombre, precio} = nextProps.producto;
        this.setState({
          nombre,
          precio,
        });
          
     } 
    
     nombreProducto = e => {
          this.setState({nombre: e.target.value })
          
          
     }

     precioProducto = e => {
          this.setState({precio: e.target.value })
     }

     actualizarProducto = e => {
          e.preventDefault();
          
          
          const { nombre, precio } = this.state;
          
          
          
          if(nombre === '' || precio === '') {
               this.setState({error: true});
               return;
          } 
          this.setState({error: false});

          // tomar el ID
          const { id } = this.props.match.params;

          // Crear el objeto
          const infoProducto = {
              id,
              nombre,
              precio
          }
     console.log(infoProducto);
          // Actualizar el Producto Actual
          this.props.editarProducto(infoProducto);

          this.props.history.push('/'); 
         
          // redireccionar
          
     }

     render() { 
          const {nombre, precio, error} = this.state;
          return ( 
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                         <div className="card">
                         <div className="card-body">
                              <h2 className="text-center">Agregar Nuevo Producto</h2>
                              <form onSubmit={this.actualizarProducto}>
                                   <div className="form-group">
                                        <label>Titulo</label>
                                        <input defaultValue={nombre} id="nombre" onChange={this.nombreProducto} onBlur={this.nombreProducto} onKeyPress={this.enterNombre} type="text" className="form-control" placeholder="Titulo" />
                                   </div>
                                   <div className="form-group">
                                        <label>Precio del Producto</label>
                                        <input defaultValue={precio} id="precio" onChange={this.precioProducto} onBlur={this.precioProducto} onKeyPress={this.enterPrecio} type="text" className="form-control" placeholder="Precio" />
                                   </div>
                                   <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                              </form>
                              {error ? 
                                   <div className="font-weight-bold alert alert-danger text-center mt-4 ">
                                        Todos los campos son Obligatorios
                                   </div> 
                                   : ''
                              }
                         </div>
                         </div>
                    </div>
               </div>
           );
     }
}
// state
const mapStateToProps = state => ({
    producto: state.productos.producto
})
 
export default connect(mapStateToProps, {mostrarProducto, editarProducto})(EditarProducto);
package es.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;


@Entity
public class Ship implements Serializable{
    private String name;
    @Id
    private String email;
	private String pass;
    private String compañias;
    
    private String pedidos;
    //private String status;
    //private String address;

    public Ship() {
       // this.status = "En preparación";
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    /*public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    } */

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getCompañias() {
        return compañias;
    }

    public void setCompañias(String compañias) {
        this.compañias = compañias;
    }

    public String getPedidos() {
        return pedidos;
    }

    public void setPedidos(String pedidos) {
        this.pedidos = pedidos;
    }

    /*public String getStatus() {
        return status;
    }

    public void setStatus(String state) {
        this.status = state;
    } */

    

    
}

#pragma strict

private var distFromAnchor : float;
private var rb : Rigidbody;
private var tr : Transform;

public var force : float;
public var anchor : GameObject;

function Start () {
	
	rb = GetComponent.<Rigidbody>();
	tr = GetComponent.<Transform>();
	
}

function Update () {
	
	//rb.velocity = Vector3.zero;
	
	distFromAnchor = (tr.position - anchor.transform.position).sqrMagnitude;

	if(distFromAnchor > 1.5f){
		
		rb.AddForce(tr.forward * Input.GetAxis("Vertical") * -force);
	}

	if(Input.GetAxis("Vertical") && distFromAnchor < 0.75){
		
		rb.AddForce(tr.forward * Input.GetAxis("Vertical") * force);
	}
}
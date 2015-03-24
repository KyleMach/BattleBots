#pragma strict

public var force : float;
public var maxForce : float;
public var revForce : float;
public var key : KeyCode;

function Start () {
	
	//key = KeyCode.S;
	SetForce();
}

function Update () {
	
	if(Input.GetKey(key)){
	
		transform.localScale.y += force;
	}
	
	if(transform.localScale.y > 1){
	
		force--;
	}
	
	if(force < 0)
		force = 0;
	
	if(transform.localScale.y < 1)
		SetForce();
		
		if(force <= 0)
			transform.localScale.y -=revForce * Time.deltaTime;
}

function SetForce(){

	force = maxForce;
}
<?php 
//get all RENTAL 
function getAllrental($db) {

    
    $sql = 'Select * FROM rental '; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get RENTAL by id 
function getrental($db, $rentalId) {

    $sql = 'Select o.name, o.email, o.phone_num, o.car_rent, o.days FROM rental o  ';
    $sql .= 'Where o.id = :id';
    $stmt = $db->prepare ($sql);
    $id = (int) $rentalId;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 

}

//add new RENTAL
function createrental($db, $form_data) { 
    // Prepare the SQL query
    $sql = 'INSERT INTO rental (name, email, phone_num, car_rent, days) VALUES (:name, :email, :phone_num, :car_rent, :days)';
    $stmt = $db->prepare($sql);
    
    // Bind parameters
    $stmt->bindParam(':name', $form_data['name']); 
    $stmt->bindParam(':email', $form_data['email']); 
    $stmt->bindParam(':phone_num', $form_data['phone_num']); 
    $stmt->bindParam(':car_rent', $form_data['car_rent']); 
    $stmt->bindParam(':days', $form_data['days']); 
    
    // Execute the query
    $stmt->execute();
    
    // Return success response
    return json_encode(['message' => 'rent added successfully']);
}



//delete RENTAL by id 
function deleterental($db,$rentalId) { 

    $sql = ' Delete from rental where id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$rentalId; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

//update RENTAL by id 
function updaterental($db,$form_dat,$rentalId) { 

    
    $sql = 'UPDATE rental SET name = :name , email = :email , phone_num = :phone_num , car_rent = :car_rent , days = :days'; 
    $sql .=' WHERE id = :id'; 
    $stmt = $db->prepare ($sql); 
    $id = (int)$rentalId;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':name', $form_dat['name']);    
    $stmt->bindParam(':email', ($form_dat['email']));
    $stmt->bindParam(':phone_num', ($form_dat['phone_num']));
    $stmt->bindParam(':car_rent', ($form_dat['car_rent']));
    $stmt->bindParam(':days', ($form_dat['days']));
    $stmt->execute(); 
}

//get all BUY 
function getAllbuy($db) {

    
    $sql = 'Select * FROM buy '; 
    $stmt = $db->prepare ($sql); 
    $stmt ->execute(); 
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 
} 

//get RENTAL by id 
function getbuy($db, $buyId) {

    $sql = 'Select o.name, o.email, o.phone_num, o.car_buy, o.payment FROM buy o  ';
    $sql .= 'Where o.id = :id';
    $stmt = $db->prepare ($sql);
    $id = (int) $buyId;
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC); 

}

//add new BUY
function createbuy($db, $form_data) { 
    // Prepare the SQL query
    $sql = 'INSERT INTO buy (name, email, phone_num, car_buy, payment) VALUES (:name, :email, :phone_num, :car_buy, :payment)';
    $stmt = $db->prepare($sql);
    
    // Bind parameters
    $stmt->bindParam(':name', $form_data['name']); 
    $stmt->bindParam(':email', $form_data['email']); 
    $stmt->bindParam(':phone_num', $form_data['phone_num']); 
    $stmt->bindParam(':car_buy', $form_data['car_buy']); 
    $stmt->bindParam(':payment', $form_data['payment']); 
    
    // Execute the query
    $stmt->execute();
    
    // Return success response
    return json_encode(['message' => 'buy added successfully']);
}



//delete RENTAL by id 
function deletebuy($db,$buyId) { 

    $sql = ' Delete from buy where id = :id';
    $stmt = $db->prepare($sql);  
    $id = (int)$buyId; 
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); 
    $stmt->execute(); 
} 

//update RENTAL by id 
function updatebuy($db,$form_dat,$buyId) { 

    
    $sql = 'UPDATE buy SET name = :name , email = :email , phone_num = :phone_num , car_buy = :car_buy , payment = :payment'; 
    $sql .=' WHERE id = :id'; 
    $stmt = $db->prepare ($sql); 
    $id = (int)$buyId;  
    $stmt->bindParam(':id', $id, PDO::PARAM_INT);
    $stmt->bindParam(':name', $form_dat['name']);    
    $stmt->bindParam(':email', ($form_dat['email']));
    $stmt->bindParam(':phone_num', ($form_dat['phone_num']));
    $stmt->bindParam(':car_buy', ($form_dat['car_buy']));
    $stmt->bindParam(':payment', ($form_dat['payment']));
    $stmt->execute(); 
}


# POST /v2/zones/<id>/recordsets
# Content-Type: application/json
 {
   "recordset" : {
     "name" : "10 mx.qadomain.github.io.",
     "description" : "An MX recordset.",
     "type" : "MX",
     "ttl" : 3600,
     "records" : [
         "10 10.1.0.2", "20 10.1.1.1", "30 10.10.10.10", "40 100.1.1.1", "50 9.9.9.9"
      ]
   }
 }

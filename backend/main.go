package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type Response struct {
	Message string `json:"message"`
}

func helloHandler(w http.ResponseWriter, r *http.Request) {
	// Simple CORS handling
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	if r.Method == "OPTIONS" {
		return
	}

	response := Response{Message: "Hello from Go Backend!"}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(response)
}

func main() {
	http.HandleFunc("/api/hello", helloHandler)

	// Check if TLS certificates exist to enable HTTPS
	certFile := "server.crt"
	keyFile := "server.key"
	
	fmt.Println("Backend server starting at :8080")
	if err := http.ListenAndServeTLS(":8080", certFile, keyFile, nil); err == nil {
		// Started successfully with HTTPS
		return
	} else {
		// Fallback to HTTP if certificates are not found or invalid
		fmt.Printf("Failed to start HTTPS: %v\nFalling back to HTTP on :8080...\n", err)
		if err := http.ListenAndServe(":8080", nil); err != nil {
			log.Fatal(err)
		}
	}
}

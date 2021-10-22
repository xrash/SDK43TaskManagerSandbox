package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

func knock(w http.ResponseWriter, req *http.Request) {
	now := time.Now().Format(time.UnixDate)

	fmt.Println(now, "got", req.Method, "/knock")

	b, err := io.ReadAll(req.Body)
	if err != nil {
		fmt.Println(now, "err", err)
		return
	}

	fmt.Println(now, "body", string(b))
}

func main() {
	http.HandleFunc("/knock", knock)
	http.ListenAndServe(":7778", nil)
}

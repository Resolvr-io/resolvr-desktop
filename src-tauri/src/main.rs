// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use nip_70::PayInvoiceRequest;
use nostr_sdk::ToBech32;

use nostr_sdk::prelude::*;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
async fn login() -> String {
    let public_key = nip_70::Nip70Client::default()
        .get_public_key()
        .await
        .unwrap();
    let npub = public_key.to_bech32().unwrap();
    return npub;
}

#[tauri::command]
async fn pay_invoice(pay_invoice_request: PayInvoiceRequest) {
    println!("{:?}", pay_invoice_request);
    nip_70::Nip70Client::default()
        .pay_invoice(pay_invoice_request)
        .await
        .unwrap();
}

#[tauri::command]
async fn sign_event(event: String) -> String {
    println!("{:?}", event);

    let unsigned_event = UnsignedEvent::from_json(event).unwrap();

    println!("{:?}", unsigned_event);

    let signed_event = nip_70::Nip70Client::default()
        .sign_event(unsigned_event)
        .await
        .unwrap();

    return signed_event.as_json().to_string();

    // println!("{:?}", nip_70::sign_event(event).await.unwrap());
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![login, sign_event, pay_invoice])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

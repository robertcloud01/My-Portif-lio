# Integração Mobile (iOS Shortcuts)

Para automatizar seu status de disponibilidade, usaremos o aplicativo "Atalhos" (Shortcuts) do iOS.

## Configuração do Backend (API)
Seu endpoint para atualização de status é:
`https://[SEU-DOMINIO-VERCEL]/api/status`

Header de Autenticação:
`Authorization: Bearer my_secret_key_12345`

## Passo a Passo no iOS

1.  Abra o app **Atalhos**.
2.  Crie uma nova "Automação Pessoal".
3.  **Gatilho (Quando):** "Wi-Fi" -> Escolha sua rede de casa -> "Ao conectar".
4.  **Ação (Fazer):** Adicionar ação "Obter Conteúdo de URL" (Get Contents of URL).
    *   **URL:** `https://[SEU-DOMINIO-VERCEL]/api/status`
    *   **Método:** POST
    *   **Cabeçalhos (Headers):**
        *   `Authorization`: `Bearer my_secret_key_12345`
        *   `Content-Type`: `application/json`
    *   **Corpo da Requisição (Request Body):** JSON
        *   Adicione um campo: `online` (Tipo: Booleano) -> `Verdadeiro` (True)
5.  Desmarcar "Perguntar ao Executar".

---

Repita o processo para "Ao desconectar" do Wi-Fi, mudando o corpo para `online: Falso`.

## Teste Manual (Via Curl)

Você pode testar agora mesmo rodando este comando no terminal (git bash ou similar):

```bash
# Definir como ONLINE
curl -X POST http://localhost:3000/api/status \
  -H "Authorization: Bearer my_secret_key_12345" \
  -H "Content-Type: application/json" \
  -d '{"online": true}'

# Definir como OFFLINE
curl -X POST http://localhost:3000/api/status \
  -H "Authorization: Bearer my_secret_key_12345" \
  -H "Content-Type: application/json" \
  -d '{"online": false}'
```

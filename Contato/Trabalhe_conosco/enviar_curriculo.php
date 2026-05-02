<?php

require __DIR__ . '/../../vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// 🔒 CONFIG (melhor que deixar no código direto)
define('EMAIL_USER', 'gamerpdro713@gmail.com');
define('EMAIL_PASS', 'foxk feoo kbbd qkep'); // senha de app

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // 📥 Dados do formulário
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $cargo = $_POST['cargo'] ?? '';
    $telefone = $_POST['telefone'] ?? '';
    $mensagem = $_POST['mensagem'] ?? '';
    $termos = isset($_POST['termos']) ? 'Aceito' : 'Não aceito';

    // ⚠️ Validação
    $erros = [];

    if (empty($nome)) $erros[] = "Nome é obrigatório";
    if (empty($email)) $erros[] = "E-mail é obrigatório";
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $erros[] = "E-mail inválido";
    if (empty($cargo)) $erros[] = "Cargo é obrigatório";
    if (empty($telefone)) $erros[] = "Telefone é obrigatório";

    // 📎 Upload do currículo
    $curriculo_anexado = false;
    $curriculo_nome = '';
    $curriculo_tmp = '';

    if (isset($_FILES['curriculo']) && $_FILES['curriculo']['error'] === UPLOAD_ERR_OK) {

        $arquivo_tmp = $_FILES['curriculo']['tmp_name'];
        $arquivo_nome = $_FILES['curriculo']['name'];
        $arquivo_tamanho = $_FILES['curriculo']['size'];
        $arquivo_tipo = mime_content_type($arquivo_tmp);

        $tipos_permitidos = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ];

        if (!in_array($arquivo_tipo, $tipos_permitidos)) {
            $erros[] = "Tipo de arquivo não permitido. Envie apenas PDF ou DOC.";
        }

        if ($arquivo_tamanho > 5 * 1024 * 1024) {
            $erros[] = "Arquivo muito grande. Máximo 5MB.";
        }

        if (empty($erros)) {
            $curriculo_nome = basename($arquivo_nome);
            $curriculo_tmp = $arquivo_tmp;
            $curriculo_anexado = true;
        }
    }

    // ❌ Se houver erros
    if (!empty($erros)) {
        echo "<h2>❌ Erro no envio</h2><ul>";
        foreach ($erros as $erro) {
            echo "<li>" . htmlspecialchars($erro) . "</li>";
        }
        echo "</ul><a href='javascript:history.back()'>Voltar</a>";
        exit;
    }

    // 📨 Corpo do e-mail (seguro)
    $corpo_email = "
    <html>
    <body>
        <h2>📄 Novo Candidato</h2>
        <p><strong>Nome:</strong> " . htmlspecialchars($nome) . "</p>
        <p><strong>E-mail:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Cargo:</strong> " . htmlspecialchars($cargo) . "</p>
        <p><strong>Telefone:</strong> " . htmlspecialchars($telefone) . "</p>
        <p><strong>Mensagem:</strong> " . htmlspecialchars($mensagem) . "</p>
        <p><strong>Termos:</strong> " . htmlspecialchars($termos) . "</p>
    </body>
    </html>
    ";

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';

    try {
        // 🔧 SMTP (GMAIL)
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = EMAIL_USER;
        $mail->Password = EMAIL_PASS;
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // 🐞 DEBUG (se der erro, ativa isso)
        // $mail->SMTPDebug = 2;
        // $mail->DebugOutput = 'html';

        // 👤 Remetente
        $mail->setFrom(EMAIL_USER, 'Sistema - Trabalhe Conosco');

        // 📩 Destino
        $mail->addAddress('informatica@labfdiniz.com.br');

        // 🔁 Reply
        $mail->addReplyTo($email, $nome);

        // 📎 Anexo
        if ($curriculo_anexado) {
            $mail->addAttachment($curriculo_tmp, $curriculo_nome);
        }

        // 📝 Conteúdo
        $mail->isHTML(true);
        $mail->Subject = "Novo Candidato: $nome";
        $mail->Body = $corpo_email;

        // 🚀 Enviar
        $mail->send();

        echo "<h2>✅ Currículo enviado com sucesso!</h2>";

    } catch (Exception $e) {
        echo "<h2>❌ Erro ao enviar</h2>";
        echo "Erro: {$mail->ErrorInfo}";
    }

} else {
    header("Location: index.html");
    exit;
}
?>
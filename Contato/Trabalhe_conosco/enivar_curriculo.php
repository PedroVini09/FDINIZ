<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Dados do formulário
    $nome = $_POST['nome'] ?? '';
    $email = $_POST['email'] ?? '';
    $cargo = $_POST['cargo'] ?? '';
    $telefone = $_POST['telefone'] ?? '';
    $mensagem = $_POST['mensagem'] ?? '';
    $termos = isset($_POST['termos']) ? 'Aceito' : 'Não aceito';
    
    // Validar campos obrigatórios
    $erros = [];
    if (empty($nome)) $erros[] = "Nome é obrigatório";
    if (empty($email)) $erros[] = "E-mail é obrigatório";
    if (empty($cargo)) $erros[] = "Cargo é obrigatório";
    if (empty($telefone)) $erros[] = "Telefone é obrigatório";
    
    // Processar o arquivo enviado
    $curriculo_anexado = false;
    $curriculo_nome = '';
    $curriculo_tmp = '';
    
    if (isset($_FILES['curriculo']) && $_FILES['curriculo']['error'] === UPLOAD_ERR_OK) {
        $arquivo_tmp = $_FILES['curriculo']['tmp_name'];
        $arquivo_nome = $_FILES['curriculo']['name'];
        $arquivo_tamanho = $_FILES['curriculo']['size'];
        $arquivo_tipo = $_FILES['curriculo']['type'];
        
        // Validar tipo de arquivo
        $tipos_permitidos = ['application/pdf', 'application/msword', 
                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        
        if (!in_array($arquivo_tipo, $tipos_permitidos)) {
            $erros[] = "Tipo de arquivo não permitido. Envie apenas PDF ou DOC.";
        }
        
        // Validar tamanho (max 5MB)
        if ($arquivo_tamanho > 5 * 1024 * 1024) {
            $erros[] = "Arquivo muito grande. Máximo 5MB.";
        }
        
        if (empty($erros)) {
            $curriculo_nome = $arquivo_nome;
            $curriculo_tmp = $arquivo_tmp;
            $curriculo_anexado = true;
        }
    } else {
        // Se quiser tornar currículo obrigatório, descomente a linha abaixo:
        // $erros[] = "Por favor, anexe seu currículo (PDF ou DOC)";
    }
    
    // Se houver erros, mostrar mensagem
    if (!empty($erros)) {
        echo "<!DOCTYPE html>";
        echo "<html><head><meta charset='UTF-8'><title>Erro</title>";
        echo "<style>";
        echo "body{font-family:Arial;padding:50px;text-align:center;background:#f5f7fa;}";
        echo ".error{background:#ffe6e6;color:#c62828;padding:30px;border-radius:10px;max-width:500px;margin:auto;}";
        echo ".btn{display:inline-block;margin-top:20px;padding:10px 20px;background:#4361ee;color:white;text-decoration:none;border-radius:5px;}";
        echo ".btn:hover{background:#2563eb;}";
        echo "</style>";
        echo "</head><body>";
        echo "<div class='error'>";
        echo "<h2>❌ Erro no envio</h2>";
        echo "<ul style='text-align:left;'>";
        foreach ($erros as $erro) {
            echo "<li>" . htmlspecialchars($erro) . "</li>";
        }
        echo "</ul>";
        echo "<a href='javascript:history.back()' class='btn'>Voltar e corrigir</a>";
        echo "</div></body></html>";
        exit;
    }
    
    // Configurações do e-mail
    $para = "informatica@labfdiniz.com.br";
    $assunto = "Trabalhe Conosco - Novo Candidato: $nome";
    
    // Corpo do e-mail em HTML
    $corpo_email = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #4361ee; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; background: #f9f9f9; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #333; }
            .value { color: #555; margin-top: 5px; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #777; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h2>📄 Novo Candidato - Banco de Talentos</h2>
            </div>
            <div class='content'>
                <div class='field'>
                    <div class='label'>👤 Nome Completo:</div>
                    <div class='value'>" . htmlspecialchars($nome) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>📧 E-mail:</div>
                    <div class='value'>" . htmlspecialchars($email) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>💼 Cargo Pretendido:</div>
                    <div class='value'>" . htmlspecialchars($cargo) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>📞 Telefone/WhatsApp:</div>
                    <div class='value'>" . htmlspecialchars($telefone) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>📝 Apresentação:</div>
                    <div class='value'>" . nl2br(htmlspecialchars($mensagem)) . "</div>
                </div>
                <div class='field'>
                    <div class='label'>✅ Termos de Uso:</div>
                    <div class='value'>$termos</div>
                </div>
                <div class='field'>
                    <div class='label'>📎 Currículo:</div>
                    <div class='value'>" . ($curriculo_anexado ? "Arquivo anexado: " . htmlspecialchars($curriculo_nome) : "Não anexado") . "</div>
                </div>
            </div>
            <div class='footer'>
                Enviado através do formulário Trabalhe Conosco em " . date('d/m/Y H:i:s') . "
            </div>
        </div>
    </body>
    </html>
    ";
    
    // Headers do e-mail
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Enviar e-mail com anexo
    $enviado = false;
    
    if ($curriculo_anexado) {
        // Criar boundary único
        $boundary = md5(time());
        
        // Headers para e-mail com anexo
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "From: $email" . "\r\n";
        $headers .= "Reply-To: $email" . "\r\n";
        $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"" . "\r\n";
        
        // Corpo do e-mail com anexo
        $mensagem_final = "--$boundary\r\n";
        $mensagem_final .= "Content-Type: text/html; charset=UTF-8\r\n";
        $mensagem_final .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
        $mensagem_final .= $corpo_email . "\r\n\r\n";
        
        // Anexar arquivo
        $arquivo_conteudo = file_get_contents($curriculo_tmp);
        $arquivo_base64 = base64_encode($arquivo_conteudo);
        
        $mensagem_final .= "--$boundary\r\n";
        $mensagem_final .= "Content-Type: application/octet-stream; name=\"" . $curriculo_nome . "\"\r\n";
        $mensagem_final .= "Content-Transfer-Encoding: base64\r\n";
        $mensagem_final .= "Content-Disposition: attachment; filename=\"" . $curriculo_nome . "\"\r\n\r\n";
        $mensagem_final .= chunk_split($arquivo_base64) . "\r\n\r\n";
        $mensagem_final .= "--$boundary--";
        
        // Enviar e-mail com anexo
        $enviado = mail($para, $assunto, $mensagem_final, $headers);
    } else {
        // Enviar e-mail sem anexo
        $enviado = mail($para, $assunto, $corpo_email, $headers);
    }
    
    // Redirecionar ou mostrar mensagem
    if ($enviado) {
        echo "<!DOCTYPE html>";
        echo "<html><head><meta charset='UTF-8'><title>Sucesso</title>";
        echo "<style>";
        echo "body{font-family:Arial;padding:50px;text-align:center;background:#f5f7fa;}";
        echo ".success{background:#e8f5e9;color:#2e7d32;padding:30px;border-radius:10px;max-width:500px;margin:auto;}";
        echo ".success h2{color:#2e7d32;}";
        echo ".btn{display:inline-block;margin-top:20px;padding:10px 20px;background:#4361ee;color:white;text-decoration:none;border-radius:5px;}";
        echo ".btn:hover{background:#2563eb;}";
        echo "</style>";
        echo "</head><body>";
        echo "<div class='success'>";
        echo "<h2>✅ Currículo enviado com sucesso!</h2>";
        echo "<p>Seu currículo foi enviado para nosso banco de talentos.</p>";
        echo "<p>Entraremos em contato em breve!</p>";
        echo "<a href='../../Menu/index.html' class='btn'>Voltar ao início</a>";
        echo "</div></body></html>";
    } else {
        echo "<!DOCTYPE html>";
        echo "<html><head><meta charset='UTF-8'><title>Erro</title>";
        echo "<style>";
        echo "body{font-family:Arial;padding:50px;text-align:center;background:#f5f7fa;}";
        echo ".error{background:#ffe6e6;color:#c62828;padding:30px;border-radius:10px;max-width:500px;margin:auto;}";
        echo ".btn{display:inline-block;margin-top:20px;padding:10px 20px;background:#4361ee;color:white;text-decoration:none;border-radius:5px;}";
        echo "</style>";
        echo "</head><body>";
        echo "<div class='error'>";
        echo "<h2>❌ Erro ao enviar</h2>";
        echo "<p>Tente novamente mais tarde ou entre em contato pelo WhatsApp.</p>";
        echo "<a href='javascript:history.back()' class='btn'>Voltar e tentar novamente</a>";
        echo "</div></body></html>";
    }
    
} else {
    // Se acessar diretamente o PHP, redirecionar para o formulário
    header("Location: index.html");
    exit;
}
?>
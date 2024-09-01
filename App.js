import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'; // Importa os estilos do arquivo styles.js

export default function App() {
  const { width } = Dimensions.get('window');  // Obter a largura da tela

  const handleBannerPress = () => {
    console.log('Banner pressionado');
  };

  const handleButtonPress = () => {
    console.log('Botão Entrar pressionado');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        style={{ width: width * 0.6, height: (width * 0.6) * 0.25, marginTop: -450 }} // Ajusta a altura de acordo com a proporção da imagem
        source={require('./assets/estacio-images/estacio-logo-2048x520.png')}
        resizeMode="contain"  // Garante que a imagem não será cortada
      />

      <Text style={styles.text}>SIA - Sistema de Informações Acadêmicas</Text>
      <Text style={styles.subText}>Terça, 27 de agosto de 2024</Text>

      {/* Banner azul abaixo do texto */}
      <TouchableOpacity style={[styles.banner, { width: width * 0.8 }]} onPress={handleBannerPress}>
        <View style={styles.bannerContent}>
          <Image
            style={styles.bannerIcon}
            source={require('./assets/estacio-images/microsoft-outlook-24x24.png')}
          />
          <Text style={styles.bannerText}>Entrar com e-mail de estudante</Text>
        </View>
      </TouchableOpacity>

      {/* Linha horizontal com "OU" */}
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <Text style={styles.lineText}>OU</Text>
        <View style={styles.line} />
      </View>

      {/* Caixa para matrícula e senha */}
      <View style={styles.inputContainer}>
        <View style={styles.inputFieldContainer}>
          <Text style={styles.inputLabel}>Matrícula</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua matrícula"
            keyboardType="numeric" // Define o tipo de teclado
          />
          <Text style={styles.linkText}>Não sei ou esqueci a matrícula</Text>
        </View>

        <View style={styles.inputFieldContainer}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true} // Oculta o texto da senha
          />
          <Text style={styles.linkText}>Esqueci minha senha / Cadastrar primeira senha</Text>
        </View>
      </View>

      {/* Botão Entrar */}
      <TouchableOpacity style={[styles.button, { width: width * 0.8 }]} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

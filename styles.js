import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 400,
  },
  text: {
    marginTop: 8, // Espaçamento entre a imagem e o texto
    fontSize: 18,  // Tamanho da fonte
    textAlign: 'center', // Centraliza o texto
    color: '#666666', // Cor do texto
    fontFamily: 'HelveticaNeue-Roman',
  },
  subText: {
    marginTop: 10, // Espaçamento entre o primeiro texto e o segundo texto
    fontSize: 15,  // Tamanho da fonte do segundo texto (menor)
    textAlign: 'center', // Centraliza o segundo texto
    color: '#666666', // Cor do segundo texto
    fontFamily: 'HelveticaNeue-Roman', // Nome da fonte personalizada
  },
  banner: {
    height: 70,         // Altura do banner
    backgroundColor: '#0072c6', // Cor azul
    borderRadius: 5,    // Cantos arredondados (opcional)
    marginTop: 20,       // Espaçamento entre o texto e o banner
    paddingHorizontal: 5, // Espaçamento horizontal interno
    justifyContent: 'center', // Alinha o conteúdo verticalmente no centro
  },
  bannerText: {
    fontSize: 15,        // Tamanho da fonte no banner
    color: '#fff',       // Cor do texto do banner
    fontFamily: 'HelveticaNeue-Roman', // Nome da fonte personalizada
    flex: 1,             // Faz o texto ocupar o espaço restante
    textAlign: 'center', // Centraliza o texto dentro do banner
  },
  bannerContent: {
    flexDirection: 'row', // Layout horizontal para a imagem e o texto
    alignItems: 'center', // Alinha verticalmente a imagem e o texto
    flex: 1,
    paddingLeft: 25, // Faz o conteúdo ocupar o espaço total disponível no banner
  },
  bannerIcon: {
    width: 24,          // Largura da imagem do banner
    height: 24,         // Altura da imagem do banner
    marginRight: 10,    // Espaçamento entre a imagem e o texto
  },
  lineContainer: {
    flexDirection: 'row', // Layout horizontal para a linha e o texto
    alignItems: 'center', // Alinha o texto e as linhas verticalmente
    marginTop: 20,       // Espaçamento entre o banner e a linha
  },
  line: {
    flex: 1,             // Faz a linha ocupar o espaço disponível
    borderBottomWidth: 0.5, // Largura da linha
    borderBottomColor: '#666666', // Cor da linha
  },
  lineText: {
    marginHorizontal: 10, // Espaçamento entre as linhas e o texto
    fontSize: 15,        // Tamanho da fonte no meio da linha
    color: '#666666',   // Cor do texto no meio da linha
    fontFamily: 'HelveticaNeue-Roman', // Nome da fonte personalizada
  },
  inputContainer: {
    width: '80%',       // Largura das caixas de entrada
    marginTop: 20,      // Espaçamento acima das caixas de entrada
  },
  inputFieldContainer: {
    marginBottom: 5,   // Espaçamento entre campos
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 5, // Espaçamento entre a caixa de entrada e o texto abaixo
    backgroundColor: '#e8f0fe' // Fundo azul claro
  },
  inputLabel: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 5, // Espaçamento entre o rótulo e a caixa de entrada
  },
  linksContainer: {
    width: '80%',      // Largura dos links
    marginTop: 20,     // Espaçamento acima dos links
  },
  linkText: {
    fontSize: 14,
    color: '#48c6f2', // Cor dos links
    textAlign: 'right', // Alinhamento dos links para a direita
    marginBottom: 10, // Espaçamento entre os links
  },
  button: {
    marginTop: 20,
    backgroundColor: '#0072c6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Roman',
    textAlign: 'center'
  },
});

export default styles;

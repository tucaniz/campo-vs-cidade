document.getElementById('compareButton').addEventListener('click', function() {
    const comparisonResults = document.getElementById('comparisonResults');
    comparisonResults.innerHTML = `
        <h3>Comparação entre Campo e Cidade</h3>
        <table>
            <thead>
                <tr>
                    <th>Aspecto</th>
                    <th>Campo</th>
                    <th>Cidade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ambiente</td>
                    <td>Natural, tranquilo</td>
                    <td>Urbano, agitado</td>
                </tr>
                <tr>
                    <td>Poluição</td>
                    <td>Baixa</td>
                    <td>Alta</td>
                </tr>
                <tr>
                    <td>Comunidade</td>
                    <td>Unida</td>
                    <td>Diversa</td>
                </tr>
                <tr>
                    <td>Oportunidades de Emprego</td>
                    <td>Limitadas</td>
                    <td>Abundantes</td>
                </tr>
                <tr>
                    <td>Serviços e Comodidades</td>
                    <td>Essenciais</td>
                    <td>Variedade</td>
                </tr>
            </tbody>
        </table>
    `;
});
